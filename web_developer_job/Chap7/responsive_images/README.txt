INDEPENDENT PART
-------------------------------------------------------

In this lesson, we will learn about responsive images.

Q1: What is a responsive image and why do we need it? 

Q2: Example page: Two unique situations (two unique code patterns).


Q3: Apply what we've learned - begin adding responsive images to our travel website.



Responsive Image Situations (each situation needs different code)
1. Art direction & cropping situation <---(PICTURE ELEMENT)
2. Image resolution & file size situation (faster load times) <-(You need to disable cache. See notes/disable_cache.png)
(For 2, different devices, different browsers have different strategies to decide when they should use which image.)
e.g.: If you start from a window relatively large, and start to shrink the screen, you'll notice that it'll never use the 
medium size of that image. And even at the small size you are drawing into, it's still using the large image. This is because chromium
is smart enough to know that if an image is sharp enough to be loaded at a larger window, it's obviously enough to be sharp enough at a smaller
window. So, it's useless to load smaller image. 

----------------------
When you want to send different images to different users because of art directions and 
cropping reasons, you use the picture element.






----------------------------------------------------
22nd COURSE PART 1
