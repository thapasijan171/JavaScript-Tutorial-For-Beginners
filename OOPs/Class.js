// Class
/*
Object-oriented programming (OOP) is a programming paradigm that uses objects and their interactions to design applications and computer programs. One of the fundamental concepts of OOP is the class. In JavaScript, classes are used to define the blueprint for objects, allowing developers to create objects that share the same properties and methods.

A class in JavaScript is defined using the class keyword, followed by the class name. The class body is defined within curly braces {} and contains the properties and methods of the class.

For example, consider the following class Person that defines a person's name and age:
*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

/*
The constructor method is a special method that is called when a new object is created from the class. It is used to initialize the properties of the object. In this example, the constructor takes in two parameters name and age and assigns them to the object's properties.

You can create a new object using the new keyword and passing in any required arguments to the constructor. For example:
*/
let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);

/*
You can also add methods to a class by defining them within the class body. For example, you could add a method called greet() that returns a greeting message:
*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

/*
JavaScript classes also support inheritance and polymorphism which are fundamental concepts of OOP, but beyond the scope of this blog.

In conclusion, classes in JavaScript are used to define the blueprint for objects and provide a way to create objects that share the same properties and methods. The class keyword is used to define a class, and the constructor method is used to initialize the properties of the object. Classes also provide a way to add methods to the object, making it easy to create reusable code. Understanding how to use classes in JavaScript is essential for creating robust and maintainable code.
*/
