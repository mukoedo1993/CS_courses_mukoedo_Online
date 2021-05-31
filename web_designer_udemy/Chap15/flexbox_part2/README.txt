width values:
With flex box, we do not need to assign width value anymore...

We do not need to give every element how/what to flex 

--------------------------------------------------------------
But with flex box, we don't need to do that. Because of search 
engine optimization reasons...


e.g.
Make sidebar-one to come first, main-column second, sidebar-two to come third:
.sidebar-one {
    ...
    order: 1;
}
.main-column {
    ...
    order: 2;
}
.main-column {
    ...
    order: 3;
}

...
If you ever tried to create a column layout with floats, you
know that equal height columns can be tricky to set up.

align:items {flex-start OR flex-end OR stretch OR center OR none}
justify-content:...
flex-basis:...


.............................................................................................
Q: What about mobile/ Responsive?
A: See CSS

...........................................................
Q: flex-wrap:
default value: nowrap
items will crowded into one line.
value: wrap
items will be more flexible.


-----------------------------------------------
.banner {
    ...
    display: flex;
}

.center-me {
    ...
    margin: auto;
}