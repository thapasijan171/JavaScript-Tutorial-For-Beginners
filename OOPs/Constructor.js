// Constructor

/*
The constructor is a special method that is used in object-oriented programming (OOP) to create and initialize new objects. In JavaScript, constructors are used to create objects that share the same properties and methods, and they are defined using the constructor keyword.

A constructor function is defined using the function keyword, followed by the function name, which is typically the name of the class. The constructor function takes in any required parameters and assigns them to the object's properties.

For example, consider the following constructor function Person that defines a person's name and age:
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
}

/*
To create a new object using the constructor function, you use the new keyword followed by the function name and any required parameters:
*/
let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);

/**
 The this keyword inside the constructor function refers to the current object being created. The this keyword is used to assign the properties passed in as arguments to the new object being created.

In addition to initializing properties, constructors can also define methods for objects created from the constructor. For example, you can add a method called greet() that returns a greeting message:
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  };
}

// Example usage
const person = new Person("John", 25);
console.log(person1.greet());
