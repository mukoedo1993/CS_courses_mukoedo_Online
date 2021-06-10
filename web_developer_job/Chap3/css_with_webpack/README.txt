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
 create app/styles/styles.css file,
 modify App.js file and webpack.config.js file,