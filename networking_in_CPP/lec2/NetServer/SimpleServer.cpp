#include<iostream>
#include "../NetCommon/olc_net.h"


enum class CustomMsgTypes : uint32_t 
{
    ServerAccept,
    ServerDeny,
    ServerPing,
    MessageAll,
    ServerMessage,
};


class CustomServer : public olc::net::server_interface<CustomMsgTypes>
{
 public:
    CustomServer(uint16_t nPort)
    {
        
    }   
}