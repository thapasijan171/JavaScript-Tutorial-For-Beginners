// For Loops
/*
For loops are a common control flow structure in programming that allows you to repeat a block of code a specific number of times. In JavaScript, there are three types of for loops: the standard for loop, the for-in loop, and the for-of loop.
*/

// Standard for loop
/* The standard for loop has the following syntax:*/
for (initialization; condition; increment / decrement) {
  // code to be executed
}

/*
The initialization the statement is executed before the loop starts and is typically used to initialize a counter variable. The condition is checked at the beginning of each iteration and if it is true, the loop continues. If it is false, the loop exits. The increment/decrement statement is executed at the end of each iteration and is used to update the counter variable.

Here's an example of a standard for loop that counts from 1 to 10:
*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//   This loop will print the numbers 1 through 10 to the console.

// For-in loop
// The for-in loop is used to iterate over the properties of an object. It has the following syntax:

for (variable in object) {
  // code to be executed
}

/*
The variable is assigned the name of each property in the object as the loop iterates over them.

Here's an example of a for-in loop that iterates over the properties of an object:
*/
let person = {
  name: "John",
  age: 30,
  job: "developer",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

/* 
  This loop will print the following to the console:
  */
name: John;
age: 30;
job: developer;

//   For-of loop
/*
The for-of loop is used to iterate over the values of an iterable object, such as an array or a string. It has the following syntax:
*/
for (variable of object) {
  // code to be executed
}
/* 
The variable is assigned the value of each element in the object as the loop iterates over them.

Here's an example of a for-of loop that iterates over the elements of an array:
*/
let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}
/*
This loop will print the numbers 1 through 5 to the console.

For loops are a powerful tool in JavaScript and can be used to perform a variety of tasks, such as iterating over arrays and objects, repeating a block of code a specific number of times, and more. With the three types of for loops available in JavaScript, you can choose the one that best fits your needs and use it to write more efficient and effective code.
*/
