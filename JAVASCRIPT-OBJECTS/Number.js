// Number
/*
The JavaScript Number object is a built-in object that provides a number of properties and methods for working with numeric values. The Number object can be used to convert a value to a number, perform mathematical operations, and format numbers for display.

One of the most commonly used methods of the Number object is the Number() function, which can be used to convert a value to a number. This function can be used to convert strings, booleans, and other types of values to numbers.
*/
console.log(Number("3.14"));
// Output: 3.14
console.log(Number(true));
// Output: 1

/*
You can also use the parseInt() and parseFloat() methods to convert strings to integers and floating-point numbers, respectively.
*/
console.log(parseInt("3"));
// Output: 3
console.log(parseFloat("3.14"));
// Output: 3.14

/**
 The Number object also provides several properties that can be used to access the maximum and minimum values that can be represented by a number in JavaScript. These properties are Number.MAX_VALUE and Number.MIN_VALUE.
 */
console.log(Number.MAX_VALUE);
// Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE);
// Output: 5e-324

/*
Another useful property of the Number object is Number.POSITIVE_INFINITY and Number.NEGATIVE_INFINITY which represents the positive and negative infinity respectively.
*/
console.log(1 / 0);
// Output: Infinity
console.log(-1 / 0);
// Output: -Infinity

/*
The Number object also provides several methods for formatting numbers for display, such as the toFixed() method, which can be used to format a number with a specific number of decimal places.
*/
console.log((3.1415926535897932384626433832795).toFixed(2));
// Output: "3.14"

// In this way, you can use the Number object in JavaScript to convert values to numbers, perform mathematical operations, and format numbers for display. It is a powerful tool that can be used to add more functionality to your JavaScript programs and make them more interactive and dynamic.
