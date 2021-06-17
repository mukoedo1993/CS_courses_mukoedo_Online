//15TH COURSE
import '../styles/styles.css'
//END OF 15TH COURSE

//start of lecture 20
if(module.hot) {
    module.hot.accept() // accept hot updates if it makes sense to accept that.
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
/*Lesson 42 example code below this line*/
function person(name, favColor) {
    console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");
}


person("John Doe", "blue");

person("Jane Smith", "green");

//Define an individual variable
let johnName = "John Doe";
let johnFavColor = "blue";


//object
var john = {
    name: "John Doe",
    favoriteColor: "blue"
};

// store functions inside an object:
var john1 = {
    name:"John Doe",
    favColor: "blue",
    greet: function() {
        console.log("Hello, my name is " + john1.name + " and my favorite color is " + john1.favColor + ".")
    }
}

person(johnName, johnFavColor);

person(john.name, john.favoriteColor);

john1.greet() //call a function within an object.





// create multiple objects very similar is not efficient:
// ctor. function
function Person(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function(){//this refers to the Person function
      console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

let john2 =new Person("John Doe", "blue");  //create a new object using our Person blueprint.
john2.greet();


let jane2 = new Person("Jane Smith", "green");
jane2.greet()