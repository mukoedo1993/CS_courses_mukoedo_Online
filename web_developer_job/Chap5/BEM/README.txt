Start from lec.17
---------------------------------------------
Identify patterns in our design
2.Identify patterns in design
3. Rules to fllow for creating class names and writing our CSS selectors.



BEM:
Popular abstract way of thinking about our interface.
B: block.
A block is an independent, self-contained and reusable part of our design.
e.g: the first big hero picture part, four feature feedback parts.

E: Element.
An element belongs to a block. It cannot be used outside of the block 
that it belongs to.
M: Modifier:
A modifier can be used on a block or an element to indicate a change to the
default state of an object.

-- CSS selectors should target elements directly with classes, instead of relying on
type selectors, descendent selectors, and the cascade.

-- Because we are limiting cascade we are free to move blocks around and reuse them
throughout the page.
-- Blocks can be nested inside other blocks.
-- Identify patterns, and then create single-responsibility blocks.
-- Makes the relationship between our HTML and CSS clear.

single-responsibility:
There is no need to code a pattern more than once.

Q: This BEM stuff is all well and good, but what about the semantics of our HTML?
Is adding all of these extra classes with presentational names making our HTML less
semantic?
No.
Nicolas Gallagher:
About HTML semantics and front-end architecture
-- "Class names cannot be unsemantic"
-- "Content-layer semantics are already served by HTML elements..."
-- "Class names impart little or no useful semantic information to machines or human visitors..."
-- Class names should communicate useful information to developers..."
http://nicolasgallagher.com/about-html-semantics-front-end-architecture/


----------------------------------
lec.18
