STARTED FROM 14TH COURSE
-----------------------------------
LEGACY readme
    Overview:
1: What is a CSS workflow?
Autoprefixer:
e.g.:
origin:
.item {
    columns: 300px 2;
}
then:
.item {
    -webkit-columns: 300px 2;
    -moz-columns: 300px 2;
    columns: 300px 2;
}

Other CSS features:
Nested CSS
- Sass
- Less
- Stylus

But here, we are going to use PostCSS.
PostCSS: a trendy new post-processor
- Fastest to compile out of all pre/post-processors

2: Add CSS support to our Webpack configuration

END OF LEGACY readme

--------------------------------------
run: 
npm install css-loader sass-loader --web-dev
modify:
webpack.config.js styles.css
run: npm run build
ctrl+c
npm install postcss-loader --save-dev
npm install postcss-simple-vars postcss-nested autoprefixer --save-dev
npm run build

Why we are loading css from javascript?
During our development, they are much faster for us to let javascript to handle
CSS files. 
By letting webpack to handle as many of aspects as possible, we are getting many
benefits in return. 

Post CSS support
confirmed



COURSE 15TH