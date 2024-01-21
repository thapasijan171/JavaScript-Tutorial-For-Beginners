// Abstraction

/*
Abstraction is a fundamental concept in object-oriented programming (OOP) that refers to the practice of hiding the implementation details of an object and exposing only the essential features to the user. In JavaScript, abstraction is achieved by using abstract classes and interfaces.

An abstract class is a class that cannot be instantiated and is meant to be used as a base class for other classes. Abstract classes typically contain one or more abstract methods, which are methods that have a signature but no implementation. These methods must be implemented by the derived classes.

JavaScript does not support abstract classes natively, but you can achieve similar functionality by using a combination of function constructors and prototypes.

For example, consider the following code:
*/
function Shape() {
  if (this.constructor === Shape) {
    throw new Error("Cannot instantiate abstract class Shape");
  }
  this.draw = function () {
    throw new Error("Cannot call abstract method draw from Shape");
  };
}

function Circle() {
  Shape.call(this);
  this.draw = function () {
    console.log("Drawing a Circle");
  };
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

let circle = new Circle();
circle.draw(); // "Drawing a Circle"
let shape = new Shape(); // Error: Cannot instantiate abstract class Shape

/*
In this example, the Shape class is an abstract class that cannot be instantiated and contains an abstract method draw() which throws an error when called. The Circle class inherits from the Shape class and implements the draw() method providing a specific implementation.

Interfaces are another way to achieve abstraction in JavaScript, although it's not a native feature of javascript. Some libraries like TypeScript provide interfaces. An interface defines a set of methods that a class must implement but does not provide an implementation for those methods. This allows developers to ensure that a class has the required methods without specifying how those methods should be implemented.
*/
