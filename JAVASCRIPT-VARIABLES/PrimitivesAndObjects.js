// Primitives and Objects
/* 
In JavaScript, there are two main types of data: primitives and objects.
*/

// Primitives

/*
Primitives are the simplest and most basic data types in JavaScript. They include:

- Numbers (e.g. 10, 3.14)
- Strings (e.g. "hello", 'world')
- Booleans (e.g. true, false)
- Null (a special value that represents an absence of value)
- Undefined (a special value that represents an uninitialized variable)
Primitives are immutable, which means that once they are created, they cannot be changed. For example:
*/

let x = 10;
x = 20; // x is now 20

/*
In this example, the value of "x" is changed from 10 to 20. However, this does not change the value of the primitive itself, but rather creates a new primitive with the value of 20.
*/

// Objects

/*
Objects are more complex data types in JavaScript and are used to represent real-world objects or abstract concepts. They are composed of key-value pairs, where the keys are strings and the values can be any data type (including primitives and other objects).

Objects are mutable, which means that they can be changed after they are created. For example:
*/

let obj = { name: "John", age: 30 };
obj.age = 31; // the age property of obj is now 31

/*
In this example, the "age" property of the "obj" object is changed from 30 to 31. This changes the value of the object itself, rather than creating a new object.

There are several other data types in JavaScript that are classified as objects, including arrays, functions, and dates. These data types behave similarly to objects in that they are mutable and can be modified after they are created.
*/

// Conclusion

/*
In summary, primitives are the simplest data types in JavaScript and are immutable. Objects are more complex data types that are used to represent real-world objects or abstract concepts and are mutable. It is important to understand the differences between these two types of data in order to write effective and maintainable code in JavaScript.
*/
