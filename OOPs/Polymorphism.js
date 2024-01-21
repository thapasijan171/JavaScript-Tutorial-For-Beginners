// Polymorphism

/*
Polymorphism is a fundamental concept in object-oriented programming (OOP) that refers to the ability of different objects to respond to the same method call in different ways. In JavaScript, polymorphism is achieved by using function overloading and function overriding.

Function overloading refers to the ability of a function to have multiple implementations based on the number and/or types of arguments passed to it. JavaScript does not support function overloading natively, however, you can achieve similar functionality by using the arguments object and checking the number and/or types of arguments passed to the function.

Function overriding refers to the ability of a subclass to provide a different implementation of a method that is already provided by its superclass. In JavaScript, this can be achieved by reassigning the prototype of the subclass.

For example, consider the following code:
*/
class Shape {
    constructor(name) {
        this.name = name;
    }
    draw() {
        console.log(`Drawing a ${this.name}`);
    }
}

class Circle extends Shape {
    draw() {
        console.log(`Drawing a Circle`);
    }
}

class Square extends Shape {
    draw() {
        console.log(`Drawing a Square`);
    }
}

let shape = new Shape("Shape");
let circle = new Circle();
let square = new Square();

shape.draw(); //Drawing a Shape
circle.draw(); //Drawing a Circle
square.draw(); //Drawing a Square

/*
In this example, the draw() method is overridden in the subclasses Circle and Square, providing a different implementation of the method that is already provided by the superclass Shape.

In conclusion, polymorphism is a fundamental concept in OOP that refers to the ability of different objects to respond to the same method call in different ways.
*/