var fs = require('fs') //fs is the name of node module or package.

fs.writeFile(__dirname +"/index.html", "<h1>HTML is great</h1>", function(error){
  if(error) {
  return console.log(error);
  }
  else
  {
  return console.log("Congrats");
  }
}) // Give this method three parameters.
// first parameter: the location at your computer where you want to create your file. __dirname will tell the node to look at the current folder. And then, write after dirname, we can add on 
// Second parameter: placeholder
// Third parameter: callback function

