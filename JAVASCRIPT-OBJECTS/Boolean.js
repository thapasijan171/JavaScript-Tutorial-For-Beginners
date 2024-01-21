// Boolean
/*
The JavaScript Boolean object is a built-in object that provides a way to work with Boolean (true/false) values in your scripts. The Boolean object can be used to create Boolean values and perform logical operations, such as and, or, and not.

A boolean value can be created by using the Boolean() function or by assigning a value of true or false to a variable.
*/
var isTrue = Boolean(1);
console.log(isTrue); // Output: true
var isFalse = Boolean(0);
console.log(isFalse); // Output: false

/*
You can also use the logical && operator to check if both expressions are true and the || operator to check if at least one of the expressions is true.
*/
var x = true;
var y = false;
console.log(x && y); // Output: false
console.log(x || y); // Output: true

/*
You can also use the ! operator to invert a boolean value.
*/
console.log(!x); // Output: false
console.log(!y); // Output: true

/*
The Boolean object also provides a valueOf() method that returns the primitive value of the Boolean object
*/
var b = new Boolean(true);
console.log(b.valueOf()); // Output: true

// In this way, you can use the Boolean object in JavaScript to work with Boolean values, perform logical operations, and invert Boolean values. It is a fundamental part of programming and helps to control the flow of the program.
