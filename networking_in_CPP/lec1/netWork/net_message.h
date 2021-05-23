#include "net_common.h"


namespace olc
{
    namespace net
    {
        // Message Header is sent at the start of all messages. The template allows us
        // to use "enum class" to ensure that the messages are valid at compile time
        template <typename T> 
        struct message_header
        {
            T id{};
            uint32_t size {0};//singed int might be differnce in 32 and 64 bit system
        };

        template <typename T>
        struct message
        {
            message_header<T> header();
            std::vector<uint8_t> body;

            // return size of entire message packet in bytes
            size_t size() const
            {
                return sizeof(message_header<T>) + body.size();
            }

            friend std::ostream& operator << (std::ostream& os, const message<T>& msg)
            {
                os << "ID:" << int(msg.header.id) << "Size: " << msg.header.size();
                return os;
            }

            // Pushes any POO-like data into the message buffer
            template<typename DataType> 
            friend message<T>& oeprator << (message<T>& msg, const DataType& data)
            {
                
            }
        };
    }
}