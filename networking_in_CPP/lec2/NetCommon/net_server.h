#ifndef NET_SERVER_H
#define NET_SERVER_H

#include <memory>
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
            server_interface(uint16_t port)
            {
            }

            virtual ~server_interface()
            {
            }

            bool Start()
            {
            }

            void Stop()
            {
            }

            // ASYNC - Instruct asio to wait for connection
            void WaitForClientConnection(std::shared_ptr<connection<T>> client, const message<T> &msg)
            {
            }

            // Send message to all clients
            void MessageAllClients(const message<T> &msg, std::shared_ptr<connection<T>> pIgnoreClient = nullptr)
            {
            }

            /*
        We know that it should be a base class, which implies there should be some functions be overwritten
        in the user subclasses.
        */

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

        };
    }

}

#endif