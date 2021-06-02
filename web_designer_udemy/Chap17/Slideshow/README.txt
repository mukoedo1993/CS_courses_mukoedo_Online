We no longer need JQuery which is needed in 2014.
All browsers nowadays have very standard support in Javascript.
Bootstrap is new industry standard in 2020.


Note 1:
javascript files:
Using
    <script type="text/javascript" src="js/cycle2.js"></script>
within your HTML file, then it will automatically locate all images within 
the same class, and reorganize them as slideshow.

By default, the value of attribute data-cycle-slides is img, but you can overwrite it as below.
  <div class="cycle-slideshow" data-cycle-slides=".slide">


The two elements below are default locator for the previous and next button for slideshow.
                 <span class="cycle-prev">Previous</span>
                    <span class="cycle-next">Next</span>