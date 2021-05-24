#ifndef OLC_NET_H
#define OLC_NET_H

#include "net_common.h"
#include "net_message.h"
#include <deque>
#include <chrono>
#include <thread>
#include <mutex>
namespace olc
{
    namespace net
    {
        template<typename T>
        class tsqueue
        {
            public:
                tsqueue() = default;
                tsqueue(const tsqueue<T>&) = delete;
                virtual ~tsqueue() {clear();}

            public:
                // Returns and maintains item at front of Queue
                const T& front()
                {
                    std::scoped_lock lock(muxQueue);
                    // To protected it from any other threads running when this particular line is in the action.
                    return deqQueue.front();
                }

                const T& back()
                {
                    std::scoped_lock lock(muxQueue);
                    deQueue.emplace_back(std::move(item));
                }

                void push_back(const T& item)
                {
                    std::scoped_lock lock(muxQueue);
                    deqQueue.emplace_back(std::move(item));
                }



                void push_front(const T& item)
                {
                    std::scoped_lock lock(muxQueue);
                    deQueue.emplace_front(std::move(item));
                }

                // Clears Queue
                void clear()
                {
                     std::scoped_lock lock(muxQueue);
                     deQueue.clear();   
                }

                // Removes and returns item from front of Queue
                T pop_front()
                {
                    std::scoped_lock lock(muxQueue);
                    auto t = std::move(deqQueue.front()); // locally caches the object before calling
                    // the double-ended cues pop from front function
                    deQueue.pop_front();
                    return t;
                }

                // Removes and returns item from front of Queue
                T pop_back()
                {
                    std::scoped_lock lock(muxQueue);
                    auto t = std::move(deqQueue.back()); // locally caches the object before calling
                    // the double-ended cues pop from front function
                    deQueue.pop_back();
                    return t;
                }

            protected:
                std::mutex muxQueue;
                std::deque<T> deqQueue;
        };

        // Forward declare the connection.
        template <typename T>
        class connection;


        template <typename T>
        struct owned_message
        {
            std::shared_ptr<connection<T>> remote = nullptr;
            // https://en.cppreference.com/w/cpp/thread/scoped_lock
            message<T> msg;

            // Again, a friendly string maker
            friend std::ostream operator<<(std::ostream& os, const owned_message<T>& msg)
            {
                os << msg.msg;
                return os;
            }
        };
    }
}

#endif