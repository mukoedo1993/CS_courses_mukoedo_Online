#include <iostream>

#include<asio.hpp>
#include <asio/ts/buffer.hpp>   //t will handle the movement of memory for us.
#include <asio/ts/internet.hpp> // It prepares asio for all of the things we need to do network programming.
int main(int  argc, char** argv)
{
    
    asio::error_code ec;

    // Fundamentally, asio needs a space to perform stuff.
    asio::io_context context;
    //It hides all of the platform specific requirements.

     if(argc > 1){
    // Get the address of somewhere we wish to connect to (the endpoint)
    asio::ip::tcp::endpoint endpoint(asio::ip::make_address(argv[1], ec), 80);
    //"93.184.216.34"
    //"127.0.0.1"
    //make_address: to convert string into sth asio could understand.
    // error_code: 


    // Create a socket, the context will deliver the implementation
    asio::ip::tcp::socket socket(context);

    // Tell socket to try and connect
    socket.connect(endpoint, ec);

    if (!ec)
    {
        std::cout << "Connected!" << std::endl;
    }
    else
    {
        std::cout << "Failed to connect to address:\n" << ec.message() << std::endl;
    }

    if(socket.is_open())// Determine whether the socket is open
    {
        // It means I have an active and survive action to the sth at the other end.
        const std::string sRequest = 
            "GET /index.html HTTP/1.1\r\r"
             "Host example.com\r\n"
             "Connection: close\r\n\r\n"; 
             // We will use the form above to send some information to the server.

        socket.write_some(asio::buffer(sRequest.data(), sRequest.size()), ec);

        //Once we have written sth to the server, we hope that we could get sth being sent back.
        size_t bytes = socket.available();
        std::cout << "Bytes Available: " << bytes << std::endl;
        
    }
  }
  else
  {
      std::cerr << "Please provide an valid IP address!\n";
  }

  
}

//Results:
/*!
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/networking_in_CPP$ g++ lec1/SimpleExample.cpp -I/home/zcw/C++_MUKOEDO_LIB/asio-1.18.1/include -lpthread
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/networking_in_CPP$ ./a.out 93.184.216.34
Connected!
Bytes Available: 0
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/networking_in_CPP$ ./a.out 127.0.0.1
Failed to connect to address:
Connection refused
Bytes Available: 0

*/