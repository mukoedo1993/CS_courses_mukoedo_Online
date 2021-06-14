

start from 25th course part2:
-----------------------------------------------------------------
Our target:
1: Add a bit of vertical spacing or margin between these two images.
2. The image of woman is a little bit wider than 33%, ...
-----------------------------------------------------------------
Sidenote 1:
It's ok to overwrite your column grid when necessary.
A little bit flexibility <---
...
Add a portrait image alternative for medium-size screen.
...
All browsers, until we tell them it, will think that images need to 
take the entire window width.
-----------------------------------------------------------------
To recap, the viewport is basically the part of the document that is currently visible.
-----------------------------------------------------------------

https://stackoverflow.com/questions/25225682/difference-between-width100-and-width100vw

vw and vh stand for viewport width and viewport height respectively.

The difference between using width: 100vw instead of width: 100% is that while 100% will make the element
 fit all the space available, the viewport width has a specific measure, in this case the width of the available screen,
  including the document margin.

If you set the style body { margin: 0 }, 100vw should behave the same as 100%.
So, I personally do not choose vw here. 
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
LEC 27TH