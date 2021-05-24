#ifndef NET_CONNECTION_H
#define NET_CONNECTION_H

#include "net_common.h"
#include "net_tsqueue.h"
#include "net_message.h"

namespace olc
{
    namespace net
    {
        template<typename T>
        class connection : public std::enable_shared_from_this<connection<T>>
        {
            // https://en.cppreference.com/w/cpp/memory/enable_shared_from_this
            public:
                connection()
                {}

                virtual ~connection()
                {}

            public:
                bool ConnectToServer();
                bool Disconnect();
                bool IsConnected() const;

            public:
                bool Send(const message<T>& msg);

            protected:
                // Each connection has a unique socket
                asio::ip::tcp::socket m_socket;

                // asio can't run and socket can't function without an i/o context.
                asio::io_context& m_asioContext; // By the client or the server interface

                // This queue holds all messages to be sent to the remote side
                //of connection
                tsqueue<message<T>> m_qMessagesOut; // Here, it is a thread_safe queue of my regular message type
                //called queue messages out. 
                // This class per se will interrogate this queue and send the messages when required.


                // This queue holds all message that have been received from
                // the remote side of this connection. Note it is a reference
                // as the "owner" of this connection is expected to provide a queue
                tsqueue<owned_message>& m_qMessagesIn;

        };
    }
}
#endif