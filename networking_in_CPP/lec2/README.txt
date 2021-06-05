Each server has an address. 
e.g. 127.0.0.1
and a port
e.g. 60000

Fundamentally, the server has two roles.
Firstly, it has to sit and listen clients who want to connect.
Client can connect at any time, that's one of the reason why asio makes this a lot simpler.

Each time a client connects to our server, a connection is created.
The connections are responsible for actually sending the messages to and from the client.
And vice versa.

Server base class ->customized derived class
client base class ->customized derived class

In lecture 2, all asio context will have sth to do at all times.
asio context <- accept connection


Target: MMO game(MASSIVELY MULTIPLAYER GAME)




----------------------------------------------------------------------------------------------
server_connection.png
the red box is a container of connections.
Shared_ptr here for the value_type of container
So, no one will actually own the object...


----------------------------------------------------------------------------------------------
18:32 2nd lec.
https://www.youtube.com/watch?v=UbjxGvrDrbw