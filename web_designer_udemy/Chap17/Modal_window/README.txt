We are going to open image in a modal window.
In user interface design for computer applications, a modal window is a graphical control element subordinate to an application's main window.

(In the video) here, we see a photo gallery. If you click on the bear,
we could see the rest of page is blacked out, and the bear is front and center.


Recipes:Custom HTML and CSS
Lightbox by Lokesh DOkhar


1: We wrap img elements with anchor elements, so that, thumbnail image will be shown,
 and when we click the image, high-resolution whole image will then pop out.
 Until now, it is all ok. JS file will be a polish.

 We need to have lightbox.min.js, jquery.js and lightbox.css here.

 The browser will search the element with the attribute data-lightbox, and then hijack the 
 tap or click event. And instead, sending it to the new page to visit the image from the link.
close.png, next.png, prev.png are also needed.

 <a href="images/bee.jpg"  data-lightbox="gallery">
                        <img src="images/bee-thumb.jpg" alt="bee-thumb">
                    </a>

References:
[1]https://en.wikipedia.org/wiki/Modal_window