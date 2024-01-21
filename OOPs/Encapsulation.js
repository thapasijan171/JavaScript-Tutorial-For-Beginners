// Encapsulation
/*
Encapsulation is a fundamental concept in object-oriented programming (OOP) that refers to the practice of hiding the internal details of an object from other objects and code. In JavaScript, encapsulation is achieved by using closures and access modifiers, such as the private and public keywords.

JavaScript uses closures to implement encapsulation, which allows developers to create private variables and methods that cannot be accessed from outside the object. For example, consider the following code:
*/
function Person(name, age) {
    let privateAge = age;
    this.name = name;

    this.getAge = function() {
        return privateAge;
    }
}

let person = new Person("John", 30);
console.log(person.name); // "John"
console.log(person.privateAge); // undefined
console.log(person.getAge()); // 30

/*
In this example, the privateAge variable is defined inside the constructor function and can only be accessed using the getAge method. This means that the internal state of the object is hidden from other objects and code, providing a level of protection and security.

Access modifiers such as private, public and protected are not natively supported in javascript, but it can be implemented using closures as well. In addition, other libraries and frameworks such as TypeScript provide a way to use access modifiers.

In conclusion, encapsulation is a fundamental concept in OOP that allows developers to hide the internal details of an object from other objects and code. In JavaScript, encapsulation is achieved by using closures and access modifiers, such as the private and public keywords. This allows developers to protect the internal state of an object and create more robust and maintainable code. Encapsulation is not natively supported in javascript but it can be implemented using closures and other libraries like TypeScript.
*/