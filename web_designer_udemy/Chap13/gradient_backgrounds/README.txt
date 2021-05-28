 background-image: linear-gradient(to right, #e5e9dc, #fff);
   #e5e9dc -> #fff changing...


At the time of 2014, newest browsers already supported background-gradient.
But some older might only support background-color, so, a background color is the 
best practice.
For some neither too old nor too new browser, tricky...
e.g.:
    background-image: -webkit-linear-gradient(top, #e5e9dc, #fff);
    background-image: -moz-linear-gradient(top, #e5e9dc, #fff);
    background-image: -ms-linear-gradient(top, #e5e9dc, #fff);
    background-image: -o-linear-gradient(top, #e5e9dc, #fff);