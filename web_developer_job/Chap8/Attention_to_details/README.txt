

start from 25th course part2:
-----------------------------------------------------------------
Our target:
1: Add a bit of vertical spacing or margin between these two images.
2. The image of woman is a little bit wider than 33%, ...
...
3. Top margin of here's how we got started is too large...
Here's how we got started...
4. Find the paragraph: Lorem... to ... fugiat....
BEM way: to create a new class, and add it to each of p element.
But personally, it's not good. 
Instead, we wrap it with a generic-content-container class.

We don't want to make a mistake of pulluting our global CSS scope.

BEM wants to rescue us from... (but not mandatory needed... just strongly recommended)

  - the cascade surprising us
  - inheritance & override madness
  - specificity wars

If our website is powered by word doc, or if down the road our website is powered by a 
content management system or a blog<- it's BEM
But if for a not that generic paragraph, we could go to our customized shortcuts....
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
LEC 27TH&28TH