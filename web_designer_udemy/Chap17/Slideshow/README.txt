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



Then, we will add pagination dots which indicate the slide you are viewing.
                    <span class="cycle-pager">&dot;</span>


<div class="cycle-slideshow" data-cycle-slides=".slide" data-cycle-pause-on-hover="true">
So that it will not automatically advance to the next slide.



English learning:
on the fly:
during the running of a computer program without interrupting the run.
e.g.: to handle the on the fly manipulation of the page and then leverage
our own.
--------------------------------------------------------------------------------------
59th and 60th course!