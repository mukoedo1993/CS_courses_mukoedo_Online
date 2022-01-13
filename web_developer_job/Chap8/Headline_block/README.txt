

start from 24th course part2:
-----------------------------------------------------------------
design pattern:
Make Two edges of content do not touch the screen.

padding at the head and bottom

recyclable

-----------------------------------------------------------------
Let's continue styling our site.
Create generic, reusable headline block.

-----------------------------------------------------------------
different heading styles in diff. heading classes
    .main-heading
    .sub-heading
    .alternate-heading
    .impact-heading
    .emphasis-heading
    .tiny-heading
    ...
    Too many class names. It doesn't make sense...
    Revisit a project a year from now...
    All the f**k code looks like spaghetti :(
    
    Can we create this new style by combining 
    existing modifiers?
    If we can: excellent.
    If we can't: create a new modifier.

    Our class names have inherent meaning.

    <h2 class="high-impact-headline"...>
    v.s.
    <h2 class="headline headline--large headline--orange"...>
    Which one is better?
    second...
    Because the second one is easy-to-understand even after years.
    Block Element Modifier:
-----------------------------------------------------------------
font-size
font-weight
-----------------------------------------------------------------
LEC 25TH
