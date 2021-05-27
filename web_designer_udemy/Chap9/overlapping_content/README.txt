Q:
Why would I ever use position absolute if it completely
removes the content from the flow of page?
A:
The answer is that nine times out of 10 in order for a position
absolute to be useful it needs to be used in conjunction with position
relative.


rgba:
red, green, blue and alpha.
Alpha in this background means alpha transparency.
Combining different amount of red, green and blue.


By default, image are inline elements. This means, when browsers
are trying to calculate the height, it can use things like box sizes and
line-height values and it's not as precise.


z-index: The battle of overlaps
If elements have been positioned in a way that
they are overlapping each other how do we decide which element
sits on top of the other or in other words which element is visible.

Rule of thumb:
If both elements are using position relative or postion absolute, which element
comes later in your HTML will be layered on top.


Review:
position: absolute;
It lets you to rmeove an element from the natural flow of the page
and instead position it in relation to an ancestor eleemnt.

Absolutely positioned elements will look for the closest ancestor element
that uses position relative and it will use that element as its frame of 
reference. If the absolutely positioned element does not have any ancestors which
use position relative. It will use the Web browser window as a whole as its frame of
reference.

If  multiple elements are overlaping each other and you wnat to have fine grained control
over which element stacks on top of the other---> USE z-index property.