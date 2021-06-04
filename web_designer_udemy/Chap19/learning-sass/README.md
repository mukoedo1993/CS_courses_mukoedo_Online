Access to a SASS Compiler<br>
1: The easy way<br>
Via Code Pen:<br>
See:<br>
https://codepen.io/mukoedo1993/pen/KKWoXyz<br>



2: The professional way<br>
node.js installed many days ago on my Ubuntu.<br>
```
#Starting at current directory:
npx sass --watch main.scss output.css
```
OR:
```
#Notice that we need package.json here.
#modify the 6th line of package.json in the form:
# "sass": "sass --watch <scss file> <css file>",
npm install
npm run sass
```
<br>
Conclusion:<br>
You can nest one rule inside another rule in SASS.

## COURSE 65TH ##


