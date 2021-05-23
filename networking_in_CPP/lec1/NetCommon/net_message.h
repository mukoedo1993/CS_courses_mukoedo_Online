#ifndef NET_MESSAGE_H
#define NET_MESSAGE_H
#include "net_common.h"
#include <vector>
#include <cstring>

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
            message_header<T> header{};
            std::vector<uint8_t> body;

            // return size of entire message packet in bytes
            size_t size() const
            {
                return sizeof(message_header<T>) + body.size();
            }

            friend std::ostream& operator << (std::ostream& os, const message<T>& msg)
            {
                os << "ID:" << int(msg.header.id) << "Size: " << msg.size();
                return os;
            }

            // Pushes any POO-like data into the message buffer
            template<typename DataType> 
            friend message<T>& operator << (message<T>& msg, const DataType& data)
            {
                // check that the type of of the data being pushed is trivially copyable
                static_assert(std::is_standard_layout<DataType>::value, "Data is too complex to...");

                // Cache current size of vector, as this will be the point we insert the data
                size_t i = msg.body.size();

                // Resize the vector by the size of the data being pushed
                msg.body.resize(msg.body.size() + sizeof(DataType));

                // Physically copy the data into the newly allocated vector space
                memcpy(msg.body.data() + i, &data, sizeof(DataType));
                
                // Recalculate the message size
                msg.header.size = msg.size();

                // Return the target message so it can be "chained"
                return msg;
            }

            template<typename DataType>
            friend message<T>& operator >> (message<T>& msg, DataType& data)
            {
                //check that the type of the data being pushed is trivially
                static_assert(std::is_standard_layout<DataType>::value, "Data is too complex to be ");

                // Cache the location towards the end of the vector where the pulled data starts
                size_t i = msg.body.size() - sizeof(DataType);

                // Physically copy the data from the vector into the user variable
                memcpy(&data, msg.body.data() + i, sizeof(DataType));

                // Shrink the vector to remove read bytes, and reset end position
                msg.body.resize(i);

                // Recalculate the message size
                msg.header.size = msg.size();

                // Return the target message so it can be "chained"
                return msg;
            }



        };
    }
}
// absolute address:
///home/zcw/CS_courses_mukoedo_Online/networking_in_CPP/lec1/NetCommon


#endif