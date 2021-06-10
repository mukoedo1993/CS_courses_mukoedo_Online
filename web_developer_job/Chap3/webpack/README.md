https://webpack.js.org/<br>

Webpack bundle your scripts, images, styles and assets. <-- industry standard<br>


package.json should have:<br>
```
 "scripts": {
    "dev": "webpack serve",
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```


See script.md for more details.<br>

Steps:<br>
1: create assets/scripts/App.js file.<br>
2: npm install webpack webpack-cli --save-dev# cli means command line interface.<br>
3: Create configuration file: webpack.config.js<br>
4: Look at package.json file. See above.<br>
5: run:<br>

```
npm run build
```

6: modify config file to make it watch any change you make.<br>
7: Add the scripts below on settings.json:
```
"files.associations": {
        "*.css": "scss"
},
```
-----------------------------------
COURSE 13TH & 14TH
