Q: What does mobile first mean?
- "Mobile-first" can mean different things in different contexts.
->Break this question into two small questions:
Q1: What is  responsive web design?
Q2: What are the shortcomings of traditional responsive web design?
e.g.: smartphone, tablet, laptop
In the past, we will start with laptop, and then consider screens as small as necessary.
smartphone <- tablet <- laptop <=we build in this direction.
Eventually, two big factors made the web design community reversed this and begin building
in the opposite direction.
Factor #1: More traffic from mobile devices than traditional desktops / laptops. Our primary source of traffic
should not be an afterthought.
Factor #2: Traditional "desktop-first" responsive design resulted in bloated, slow loading websites.
We don't want anyone to have to download extra data that they won't even use.
Mobile-first = efficient websites that load as quickly as possible for everyone.
...only enhance certain features for larger devices when necessary.

                        Mobile first
        Design context                                      Deveopment context

        Design around a smaller                             Coding the site so devices don't download
        screen first.                                       unnecessary data.

        Force us to priortize our                           Treat the most essential view of our website
                                                            as our baseline and code upwards from there.
        content what we want to showcase.

        Anticipate most common user actions.                Make the site load quickly for everyone.

        Information architects, graphic designers, 
        usability experts.





- How does "mobile-first" apply to our Travel site?
Not all projects you'll work on will include a mobile-view design comp.
BUT...
Even if we are only given a desktop design comp, there is no reason to not
make every website you develop a mobile-first website.


- Where do we begin with mobile-first development?
- HTML
- CSS
- Javascript

- Begin writing CSS the "mobile-first" way.
Starts at 20th course.
median-query
mixins: <-- reusable bit of code.

-----------------------------------
script:
npm install postcss-mixins --save-dev