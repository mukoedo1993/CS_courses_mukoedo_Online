
#include<asio.hpp>
#include <asio/ts/buffer.hpp>   //t will handle the movement of memory for us.
#include <asio/ts/internet.hpp> // It prepares asio for all of the things we need to do network programming.
int main()
{
    asio::error_code ec;

    // Fundamentally, asio needs a space to perform stuff.
    asio::io_context context;
    //It hides all of the platform specific requirements.


    // Get the address of somewhere we wish to connect to (the endpoint)
    asio::ip::tcp::endpoint(asio::ip::make_address("93.184.216.34", ec), 80);
}

//g++ SimpleExample.cpp -I/home/zcw/C++_MUKOEDO_LIB/asio-1.18.1/include