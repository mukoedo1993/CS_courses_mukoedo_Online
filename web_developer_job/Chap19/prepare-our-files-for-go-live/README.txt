FROM SEC. 59TH
--------------------------------
Preparing Our Sites for Go Live:
dist folder for public:
build process
```
npm run dev # When we want to work our process
```

```
npm run build # When we want to actually publich our process. It will run once, generate automatic copy.
```
--------------------------------
course 60th:
vendor code: code we didn't write
npm run build:
If we change our App.js file, we will have a new bundled file.
cache boosting...
```
npm install clean-webpack-plugin --save-dev
```

It doesn't force the visitors to redownload the entire bundle again if we changed a little bit of
CSS.
```
npm install mini-css-extract-plugin --save-dev
```

```
npm install css-minimizer-webpack-plugin
```
extracting CSS from the main bundle... 
Instead, leave it separate CSS file...
sidenote:
If you rely on root relative imports, you have to copy the files to your project as discussed in the Tidying Up chapter.
copy-webpack-plugin works for this purpose, but you can also copy the files outside of webpack.
The benefit of the former approach is that a Development Server can pick that up.

Any other lookup will go through webpack and it will try to evaluate the url and @import expressions.
 To disable this default behavior, set css-loader url: false and import: false through the loader options.

--------------------------------
course 62ND
```
npm install html-webpack-plugin --save-dev
With that plugin, you will not need to include script in your main HTML file, i.e., index.html file.
```
rule of thumb
more than 10 pages: you need a static site generator
less than 10 pages: you don't need a static site generator
--------------------------------
course 63RD
multiple html files in one project.
```
npm install fs-extra --save-dev 
```
copy our images in the build task.
So you and I as Web developers are always going to be using the newest version of our web browser,
meaning we will have access to the latest and greatest Javascript features.
...
We don't need to change our way of writing JS code, but our code will be applied to wider range of browser holders.

```
npm install @babel/core @babel/preset-env babel-loader --save-dev #
```



--------------------------------
SEC 59TH & 60TH & 61ST & 62ND & 63RD

