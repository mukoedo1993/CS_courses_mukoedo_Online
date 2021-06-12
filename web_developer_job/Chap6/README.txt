Start from lec.19
---------------------------------------------
Overview ->for the package of webpack-dev-server
1. CSS & JS updates in the browser without a full reload.

2. Webpack reloads the browser for us when we save a change to our HTML file.

3. View our site on any device connected to the same Wi-Fi / Network as the computer
we're working on.

----------------------------------
#Scripts on terminal:
npm install webpack-dev-server --save-dev
npm run dev # Attention! we need to use npm run dev here because we need both webpack and serve here!
#Notice that we have changed App.js, package.json and webpack.config.js files.
#open browser. localhost:3000
----------------------------------

Sidenote:a full reload is very expernsive in terms of speed. It forces the web browser to
completely reload and rerender and repaint the entire page.
webpack-dev could allow us to update without full page reload.
It's bundling up our code and then it's injecting that latest code into the browsers memory
on the fly. Not only is this fast, but it's also convenient when we begin working with JS.

The bundle server made our address available on our address:
 localhost:3000.


Access the web page  at the url 
192.168.<>.<>:3000
 on other devices with access to the same internet.

localhost:3000/bundled.js 
could show us the bundled js file which is injected in the server rather than our
local disk.
------------------------------------
lec.20


------------------------------------
