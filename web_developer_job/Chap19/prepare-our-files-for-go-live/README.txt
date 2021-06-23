FROM SEC. 57TH
--------------------------------
Improve site speed:
Lazy Loading

What is Lazy Loading? 
Do we really download images at the bottom of page when we still scroll at the
top of page?
lazy downloading:
we are only ready to download images when we are ready to scroll down.

```
npm install lazysizes # This is a package we want our visitor to download: direct dependency not dev dependency
```

```
import lazysizes
```
```
<img class="lazyload" data-srcset...>
```
You could apply lazyload to svg file, but they are so small... 

In our case, only three bottommost images will not be loaded if we scroll from the very top.
--------------------------------
SEC. 58TH