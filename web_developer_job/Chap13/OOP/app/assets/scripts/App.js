//15TH COURSE
import '../styles/styles.css'
//END OF 15TH COURSE


import Person114 from './modules/Person'
import Person114_1 from './modules/Person_1'

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


let jane2 = new Person("Jane Smiths", "green");
jane2.greet()


// course 43

let john114_1 = new Person114("John Does1", "red");
john114_1.greet()


let john114_2 = new Person114_1("Yiyiyo Koyiyo", "bloodred");
john114_2.greet()



// inheritance
class Adult extends Person114_1 {
       payTaxes() {
           console.log(this.name + " now owes zero taxes. ")
       }
}

let jane114_3 = new Adult("Jane Smith114_3", "bloodgreen")
jane114_3.greet()
jane114_3.payTaxes()