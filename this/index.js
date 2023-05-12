// this = A reference to the object that we're currently working with.

/*

class Car{

  constructor(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive(){
    console.log("You drive the", this.model);
  }
  brake(){
    console.log("You step on the",this.model+"'s brakes!");
  }
  whatIsThis(){
    return this;
  }
}

let car1 = new Car("Ford", "Mustang", 2022, "red");
let car2 = new Car("Chevy", "Corvette", 2021, "blue");

console.log(car1.whatIsThis());

car1.drive();
car2.brake();

console.log(this);

*/

/*

const user = {
  firstName: "John",
  lastName: "Doe",
  // fullName: function(){
  //   console.log(this)
  //   console.log(this.firstName + " " + this.lastName)
  // },
  // fullName: () => {
  //   console.log(this)
  //   console.log(this.firstName + " " + this.lastName)
  // },
  fullName: function() {

    const arrowFunction = () => {
      console.log(this)
      console.log(this.firstName + " " + this.lastName)
    }
    arrowFunction();

  },
  age: 30,
  email: "envkt@example.com",
  hobbies: ["programming", "piano"],
  listHobbies: function() {
    this.hobbies.forEach(function(hobby){
      console.log(this.firstName)
      console.log(hobby)
    }, this);
  }
}

user.listHobbies();

*/

function User(name) {
  this.name = name;
  console.log(this);
}

const benji = new User("Benji");
const shah = new User("Shah");