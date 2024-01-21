// Objects

/*
Object-oriented programming (OOP) is a programming paradigm that uses objects and their interactions to design applications and computer programs. In JavaScript, objects are a fundamental concept, and they are used to represent real-world entities, such as a person, a car, or a bank account.

JavaScript objects are created using the {} notation, also known as object literal notation. For example, the following code creates an object that represents a person:
*/
let person = {
    name: "John",
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

/*
You can access the properties of an object using the dot notation (.) or the bracket notation ([]). For example, you can access the name and age properties of the person object using:
*/
console.log(person.name); // "John"
console.log(person["age"]); // 30


/*
You can also add, update and delete properties to an object by using the dot notation or the bracket notation.
*/
person.address = "New York";
person["phone"] = "123-456-7890";
delete person.age;

/*
JavaScript objects also have built-in methods such as hasOwnProperty(), valueOf(), toString() etc.

Objects in JavaScript can also be created using a constructor function, which is a special kind of function that is used to create and initialize new objects. For example, the following code defines a constructor function Person that can be used to create new Person objects:
*/
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);

/*
In addition, JavaScript also provides a Object() constructor function that can be used to create an empty object with no properties.

In conclusion, objects in JavaScript are a fundamental concept that are used to represent real-world entities. They can be created using object literal notation or constructor functions, and they have properties and methods that can be accessed and manipulated. Understanding how to work with objects in JavaScript is essential for creating robust and maintainable code, and also it's the foundation of OOP in JavaScript.
*/
