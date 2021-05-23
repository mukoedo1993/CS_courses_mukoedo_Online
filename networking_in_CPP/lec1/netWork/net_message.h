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
            uint32_t size = 0;
        };
    }
}