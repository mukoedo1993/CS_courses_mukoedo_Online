Transform Big Four

1: Rotate

```
transform: rotate(...degs) /*positive clockwise negative counter-clockwise*/
```
<br>
2: Scale
```
transform: scale(times) /*Scale function very important sideway for size change*/
```
Attention:<br>
When we use scale, we are only dealing with this particular element.
<br>
3: Skew
```
    transform: skewX(-25deg);/*skewX skew horizontally*/
    /*skewY skew vertically*/
```
4: Position (origin & placement)<br>
E.g.: Use only the top-left corner, and grow out in only the direction.
```
 transform: translate(X,Y);
 transform: translateX();
 transform: translateY();
```
<br>

# Conclusions #
position: relative vs translate() <br>
1: Layout purposes = Use position : relative(Not Hardware-accelerated)<br>
2: Animation purposes = Use translate()
