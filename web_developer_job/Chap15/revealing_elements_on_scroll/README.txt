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
rather, it's a package that we actually want to send it alone to our visitor.


----------------------------------------------------------------------

course 51st:
If the scroll is moved near the top of the hidden part, then element was started to be calculated.
Once every element has been revealed, then it will stop listen to the new event, and console will not log new
information.
//window.innerHeight: size of viewport of current browser in pixel.
//The HTMLElement.offsetTop read-only property returns the distance of the outer border of the current element relative to the inner border of the top of the offsetParent node.
/*
offsetParent:
The HTMLElement.offsetParent read-only property returns a reference to the element which is the closest (nearest in the containment hierarchy) positioned ancestor element.
 If there is no positioned ancestor element, the nearest ancestor td, th, table will be returned, or the body if there are no ancestor table elements either.
*/

...
Technically, we could enhance our efficiency even further by storing our elements top offset in memory.
The idea is, any time you can avoid asking the browser for fresh data, that's a performance win.

reusable class for different threshold percentage and different selectors.
----------------------------------------------------------------------


course 48th