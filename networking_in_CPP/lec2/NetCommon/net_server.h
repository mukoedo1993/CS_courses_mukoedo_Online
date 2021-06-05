#ifndef NET_SERVER_H
#define NET_SERVER_H

#include <memory>
#include <algorithm>
#include <functional>
#include "net_common.h"
#include "net_tsqueue.h"
#include "net_message.h"
#include "net_connection.h"

namespace olc
{

    namespace net
    {
        template <typename T>
        class server_interface
        {
            server_interface(uint16_t port):
                 m_asioAcceptor(m_v4asioContext, asio::ip::tcp::endpoint(asip::ip::tcp::v4(), port))
            {
            }

            virtual ~server_interface()
            {

                Stop();
            }

            bool Start()
            {
                try
                {
                    WaitForClientConnection();//keep a task, so it will keep alive.

                    m_threadContext = std::thread([this]() {m_asioContext.run();});

                }catch (std::exception& e)
                {
                    // Something prohibited the server from listening
                    std::cerr << "[SERVER] Exception " << e.what() << "\n";
                }

                std::cout << "[SERVER] Started!\n";
                return true;
            }

            void Stop()
            {
                // Request the context to close
                m_asioContext.stop();

                // Tidy up the context thread
                if (m_threadContext.joinable()) m_threadContext.join();

                // Inform sb., anybody, if they care...
            }

            // ASYNC - Instruct asio to wait for connection
            void WaitForClientConnection(std::shared_ptr<connection<T>> client, const message<T> &msg)
            {
                m_asioAcceptor.async_accept(
                    [this](std::error_code ec, asio::ip::tcp::socket socket)
                    {
                        if(!ec)
                        {
                            std::cout << "[SERVER] New Connection: " << socket.remote_endpoint() << "\n"; // To give us the ip address of remote_endpoint.
                          
                            std::shared_ptr<connection<T>> newconn =  //To tell the connection that it is fundamentally owned by a server.
                            //We want to tailor how the connection behaves depending
                                std::make_shared<connection<T>>(connection<T>::owner::server, 
                                m_asioContext, std::move(socket), m_qMessagesIn); // It becomes shared among all connections, but thread-safe.

                         // temporary comment out 70th, 72nd and 73rd 79, 80, 82, 84, 86, 87, 88 lines.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

              
                            // Give the user server a chance to deny connecton
                            if(OnClientConnect(newconn))
                            {
                                // Connection allowed, so add to container of new connections
                                m_deqConnections.push_back(std::move(newconn));

                                m_deqConnections.back()->ConnectToClient(nIDCounter++);

                                std::cout << "[" << m_deqConnections.back()->GetID() << "] Connection Approved\n";
                            }
                            else {
                                std::cout << "[----]Connection denied\n";
                            }    
                        }
                        else
                        {
                            //Error has occured during acceptance
                            std::cout << "[SERVER] New Connection Error: " << ec.message() << "\n";
                        }

                        // Prime the asio context with more work - again simply wait for
                        // another connection...
                        WaitForClientConnection();
                    });
            }
            /*
            recap:
            We issue a task to the asio context to sit and wait for incoming connections. When something does try
            and connect, we will create a new object called new connection. We'll give the opportunity to the user to deny
            the connection. But if they choose to accept it, we'll add that connection to our container of connections. we'll
            allocate it in id and we're done.
            */


           // Send message to a specific client
           void MessageClient(const message<T>& msg, std::shared_ptr<connection<T>> client)
           {
               if (client && client->IsConnected())
               {
                   client->Send(msg);
               }
               else
               {
                   //If we have tried to manipulate the client and the manipulation fails,
                   // do we have any inkling that the client is no longer there...
                   OnClientDisconnect(client);
                   client.reset();
                   m_deqConnections.erase(
                   std::remove(m_deqConnections.begin(), m_deqConnections.end(),client),m_deqConnections.end()); //erase_remove idiom
               }
           }




            // Send message to all clients
            void MessageAllClients(const message<T> &msg, std::shared_ptr<connection<T>> pIgnoreClient = nullptr)
            {
                bool bInvalidClentExits = false;
                for(auto& client : m_deqConnections)
                {
                    // Check client is connected...
                    if (client && client->IsConnected())
                    {
                        // ..It is!
                        if (client != pIgnoreClient)
                            client->send(msg);
                    }
                    else
                    {
                       // the client couldnt be contacted, so assume it has
                       // discontinued
                       OnClientDisconnect(client);
                       client.reset();
                       bInvalidDisconnect = true;
                    }
                }

                if(bInvalidClentExits)
                    m_deqConnections.erase(
                        std::remove(m_deqConnections.begin(), m_deqConnections.end(), nullptr), m_deqConnections.end()
                    );// We don't want to change the iterators when we are iterating via a range-for... Because it might invalidate those iterators.
            }

            /*
        We know that it should be a base class, which implies there should be some functions be overwritten
        in the user subclasses.
        */


            //To let the user to decide when is the most proper time to handle messages.
            void Update(size_t nMaxMessages = -1) // unsigned!
            {
                size_t nMessageCount = 0;
                while(nMessageCount < nMaxMessages && !m_qMessagesIn.empty())
                {
                    // Grab the front message
                    auto msg = m_qMessagesIn.pop_front();

                    // Pass in message handler
                    OnMessage(msg.remote(), msg.msg);

                    nMessageCount++;
                }
            }

            protected:
            //called when a client connects, you can veto the connection by returning false
            virtual bool OnClientConnect(std::shared_ptr<connection<T>> client)
            {
                return false;
            }

            // Called when a client appears to have disconnected
            virtual void OnClientDisconnect(std::shared_ptr<connection<T>> client)
            {
                //e.g.: remove from simulation
            }

            // Called when a message arrives:
            virtual void OnMessage(std::shared_ptr<connection<T>> client, message<T>& msg)
            {

            }

        protected:
            // Thread Safe Queue for incoming message packets
            tsqueue<owned_message<T>> m_qMessagesIn;

            // Order of declaration is important - it is also the order initialisation
            asio::io_context m_asioContext;
            std::thread m_threadContext;

            // These things need an asio context
            asio::ip::tcp::acceptor m_asioAcceptor;

            //CLients will be identified in the "wider system" via an ID <---1. It is a consistent ID that accroses the whole system.
            //<--2. because even though clients have unique id and port number, but not convenient...
            uint32_t nIDCounter = 10000;

        };
    }

}
// Until now,
/*we have now implemented:
it handles connections...
handles storing incoming messages into the thread-safe deque,
and give users ways to process these messages...*/
#endif