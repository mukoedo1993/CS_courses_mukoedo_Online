Cascade:
A small waterfall, typically one of several that
fall in stages down a slope.


Overwrite our preferences:
e.g.:
Browser: "H1 elements should be big and bold"
Our CSS:" No, they should not."
We could OVERWRITE it.
e.g.2:
Browser: "All text should be black."
Our CSS: "No, it should be green."


Inheritance:
It is the way that certain CSS properties are passed along
ancestor elements to children element


Specificity:
How the web browser decides which set of CSS instructions to listen to,
if two or more CSS styles are competing with each other...
Overwriting an element that has already been overwritten is a liitle trickier...
We need a more specific than the selector...
rule 1:
Descendant selectors are more specific than type selectors.
rule 2:
Deeply descendant selectors are more specific than shallow or simple descendant selectors.
rule 3:
class selectors are more specific than type or descendant selectors.
rule 4:
A descendant selector which references a class is more specific than
a solitary class selector.
rule 5:
When two rules have identical specificity values whichever one comes last
in the stylesheet will be followed.

So, define general rules first, and more and more specific rules in CSS.