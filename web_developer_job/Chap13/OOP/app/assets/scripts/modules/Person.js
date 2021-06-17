function Person114(fullName, favColor) {  //Ctor. function
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function(){//this refers to the Person function
        console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
  }






export default Person114


// Person114 is what will be used if another file import this file.