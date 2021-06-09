// programmatically download and save an image from Internet.


var fs = require('fs'); //fs is the name of node module or package.
var https = require('https');

fs.writeFile(__dirname +"/index.html", "<h1>HTML is great</h1>", function(error){
  if(error) {
  return console.log(error);
  }
  else
  {
  return console.log("Congrats");
  }
}); // Give this method three parameters.
// first parameter: the location at your computer where you want to create your file. __dirname will tell the node to look at the current folder. And then, write after dirname, we can add on 
// Second parameter: content you want to write.
// Third parameter: callback function


var myPhotoLocation = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg';
https.get(myPhotoLocation, function(response)
{
  response.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
}//This function fetch the image from the url and save the file as
// mydog.jpg
);

