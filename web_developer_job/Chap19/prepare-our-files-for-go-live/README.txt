FROM SEC. 58TH
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
 css-loader url
--------------------------------
SEC 59TH & 60TH
60th <- line 55th 1min time stamp
