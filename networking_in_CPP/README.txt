https://www.youtube.com/watch?v=2hNdkYInj4g

lec 1 45:00


Note1:
We need to let server to have enough time to read something.


conclusion of *2.cpp
As you can see in this very simple example, thinking asynchronously
does provide some benefits, but it's not without its own costs of complexity.
parse the header and primer buffers accordingly.



netWork project:

messages: two primary components:
1: header<template>(fixed size) -> identifier(customized enum class) & size(bytes)
2: body -> zero or more bytes.
serialize and deserialize conveniently... also... 
So, we will never read a message with unknown sizes.

server's roles:
1: allows information to interchange between clients.
2: Run the game itself.

enum class {
    FireBullet
    MovePlayer
};

message<GAME> msg;
msg << x << y
msg >> x >> y


figure 1:
To make sure Q is on our control.