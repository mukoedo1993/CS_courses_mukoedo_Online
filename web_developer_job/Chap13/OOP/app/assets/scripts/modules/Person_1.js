// class syntax: (syntactic sugar)
// COURSE 43RD
class Person114_1{
  
    constructor(name1, favoriteColor1){
        this.name = name1;
        this.favoriteColor = favoriteColor1;
    }

greet(){ // greet method
    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
}
}


export default Person114_1