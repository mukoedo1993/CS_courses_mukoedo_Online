Goal: 
To create two sections that sit side by side giving the
appearance of columns.


float:
e.g.: a newspaper or magazine,
Typically you'll see images floated to the left or
the right and the main text of the article wraps itself around
the image.
So, we need to float not only main-area element but also sidebar element here.


clear-fix method:
The clearfix, for those unaware, is a CSS hack that solves a persistent bug that occurs when two 
floated elements are stacked next to each other. When elements are aligned this way, 
the parent container ends up with a height of 0(once counter another element), and it can easily wreak havoc on a layout.



FAQ:
1:screen.css SEE

2:Q: Why are we using percentage values for width instead of
pixel values?
A: Because we need to ask ourselves how large is the container if we use pixel
values.

3: Why would we bother creating reusable class that let their parents auto clear their children?
A: In the real world, we need our content to be self-contained modules.


Conclusions:
1: To have sections of webpage sit side by side one another(columns),
we add "float" property and we assign "width" value.

2: Clear your floats!!!
fix 
clearfix

3: There are different units of measure for the width property
(% px and many others)