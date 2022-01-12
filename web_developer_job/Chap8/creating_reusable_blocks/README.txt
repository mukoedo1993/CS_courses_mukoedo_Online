start from 22nd course part2:
-----------------------------------------------------------------
design pattern:
make Two edges of content  do not touch the screen.

padding at the head & bottom

img{
    ...
display: inline; /*browser thinks the image is similar to a line or text.
When the browser thinks that this might be a line of text, it wants to leave
a little bit of room for the bottom part of certain letters that hang below the rule.
On the contrary, border works well here.*/
...
display: block; /*to treat the image like a div*/
}
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
LEC 24TH
