

start from 25th course part2:
-----------------------------------------------------------------
Our target:
    Build a reusable block that we can use to create column layouts
throughout our page.
    And make small screen to use single-column layout.

FOUR-EIGHT SPLIT.
-----------------------------------------------------------------
12-columns grid.
-----------------------------------------------------------------
Sidenote 1:
If an element is taller than the element containing it, and it is floated, it will overflow outside of its container.
Because when we float an element, we take it out of normal flow of our image.

2 ways to clearfix:
1st way: sloppy <- add a clear-me div. But it's an empty element only for styling purpose. We should avoid it.
2nd way: see _row.css
-----------------------------------------------------------------


negative margin has made the row in general, 65 pxs wider than it should be.

The row is supposed to be constrained by the wrapper div. For example, if we open up wrapper.css and gives it a background-color of green, you can see the yellow of our row element is protruding...

It's where the padding or gutter for this second column is.

But we set the overflow as hidden, so we cannot see it anymore...
-----------------------------------------------------------------
overlfow hidden topic:
see:
https://stackoverflow.com/questions/11495200/how-do-negative-margins-in-css-work-and-why-is-margin-top-5-margin-bottom5
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
LEC 26TH
