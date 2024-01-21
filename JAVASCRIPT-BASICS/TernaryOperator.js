// Ternary Operator
/*
The ternary operator is a shorthand way to write an if-else statement in JavaScript. It takes the form of condition ? value1 : value2, where condition is a boolean expression, and value1 and value2 are expressions of any type. If condition is true, the ternary operator returns value1; if condition is false, it returns value2.

Here's an example of how you can use the ternary operator to assign a value to a variable based on a condition:
*/
let x = 10;
let y = 20;
let max;

max = x > y ? x : y;

console.log(max); // Outputs: 20

/*
In this example, the ternary operator checks whether x is greater than y. If it is, max is assigned the value of x; otherwise, it is assigned the value of y.

The ternary operator can be a useful and concise way to write simple if-else statements, but it can become difficult to read and understand when used for more complex statements or nested inside other expressions. In these cases, it may be better to use a regular if-else statement instead.
*/
