e.g.:
Groceries

table of rows<tr>
<th></th>
<td>table of column</td>
<td>...</td>
....
</tr>

labelling system:
<th></th>

It's considered best practice to wrap any
header information in the table inside a thead element.<thead> (NOT<th>)

Also, <tbody> element


Thinking:
thead and tbody don't cause any visual changes.
But there are two reasons here:
1:It gives us a different hook with later with CSS when we want to style the table
2: It increases our semantic richness in our code


<tfoot>
Even if we place tfoot above other element, it will still be displayed in the web browser
below the body content.


Conclusion
1st layer: <table>

2nd layer: <thead> or <tbody> or <tfoot>

3rd layer: <tr>

4th layer: <td> or <th>table cell, which is either a piece of data, or a header <th>