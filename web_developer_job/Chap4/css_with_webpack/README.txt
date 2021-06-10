STARTED FROM 14TH COURSE
-----------------------------------
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