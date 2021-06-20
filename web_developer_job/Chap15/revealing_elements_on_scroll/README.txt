Revealing elements on scroll
----------------------------------------------------------------------
course 48th:
  let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
  //getBoundingClientRect():The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

// window.innerHeight: An integer value indicating the window's layout viewport height in pixels. The property is read only and has no default value.

-------------------------------------------------------------------------
course 49th: omitted

----------------------------------------------------------------------

course 50th: 
Imrpove performance.
Use as less horsepower of computer processing as possible.
The original method we use in course 48th waste our horse power.

Have you ever felt your laptop or iphone to hot to be held? :)

As a programmer, you are always striving for writing most-efficient code.
To reduce the frequency for calling the function:
Every 100ms we scroll it...

lodash: industry standard
npm install lodash #lodash is not a process that makes our workflow or development process easier,
# rather it's a package that we actually want to send it alone to our visitor.


----------------------------------------------------------------------
course 48th