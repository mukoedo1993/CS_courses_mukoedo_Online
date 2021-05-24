#include <iostream>

#include "../NetCommon/olc_net.h"

enum class CustomMsgTypes : uint32_t
{
    FireBullet,
    MovePlayer
};

int main()
{
    olc::net::message<CustomMsgTypes> msg;
    msg.header.id = CustomMsgTypes::FireBullet;

    int a = 1;
    bool b = true;
    float c =3.14159f;

    struct {
         float x;
         float y;
    } d[5];
   std::cout << a << b << c << "\n";

   msg << a << b << c
    << d
   ;
    a = 99;
    b = false;
    c = 99.0f;
  std::cout << a << b << c<<"\n";

    std::cout << msg << "!!!\n";
    

    msg 
    >> d
     >> c >> b >> a;


    std::cout << a <<":"<< b << ":" << c << "\n";


    std::cout << msg << "\n!!!\n";


    return 0;
}
/*!
base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/networking_in_CPP$ g++ lec1/NetClient/SimpleClient.cpp -o part1_3 -I/home/zcw/C++_MUKOEDO_LIB/asio-1.18.1/include -lpthread
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/networking_in_CPP$ ./part1_3
113.14159
99099
ID:0Size: 57!!!
1:1:3.14159
ID:0Size: 8
!!!
!*/