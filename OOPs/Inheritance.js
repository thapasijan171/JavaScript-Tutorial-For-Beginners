// Inheritance
/*
Inheritance is a fundamental concept in object-oriented programming (OOP) that allows developers to create a new class that inherits properties and methods from an existing class. In JavaScript, inheritance is achieved by using the prototype property and the Object.create() method.

JavaScript uses a prototype-based inheritance model, which means that objects can inherit properties and methods from other objects. Each object has a prototype property that refers to another object, and properties and methods are inherited by traversing the prototype chain.

For example, consider the following code:
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

function Student(name, age, major) {
  Person.call(this, name, age);
  this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let student = new Student("John", 25, "Computer Science");
console.log(student.greet()); // "Hello, my name is sijan and I am 17 years old."
console.log(student.major); // "Computer Science"

/*
In this example, the Student class inherits properties and methods from the Person class. The Object.create() method is used to create a new object that inherits from the Person.prototype object, and the constructor property is reset to the Student class.

In JavaScript, the inheritance model is a bit different from other languages like Java or C#, where classes inherit from other classes and the subclass has access to the methods and properties of the superclass. In javascript, it's based on the prototype chain, where each object has a prototype property that refers to another object and it inherits properties and methods by traversing the prototype chain.

In conclusion, inheritance is a fundamental concept in OOP that allows developers to create a new class that inherits properties and methods from an existing class. In JavaScript, inheritance is achieved by using the prototype property and the Object.create() method. This allows developers to create reusable code and create a more organized and maintainable codebase. Understanding the prototype-based inheritance model in javascript is essential to be able to use inheritance effectively in javascript.
*/
