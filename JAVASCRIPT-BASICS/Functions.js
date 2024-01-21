// Functions
/*
JavaScript functions are blocks of code that can be defined and executed whenever needed. They are a crucial part of JavaScript programming and are used to perform specific tasks or actions.

Functions are often referred to as "first-class citizens" in JavaScript because they can be treated like any other value, such as a number or a string. This means that they can be assigned to variables, passed as arguments to other functions, and returned as values from functions.

Here's the basic syntax for defining a function in JavaScript:
*/

function functionName(parameters) {
  // code to be executed
}

/*
The functionName is a unique identifier for the function, and the parameters are the variables that are passed to the function when it is called. These parameters act as placeholders for the actual values that are passed to the function when it is executed.

Here's an example of a simple function that takes a single parameter and returns the square of that number:
*/
function square(x) {
  return x * x;
}

/*
    To call this function, you would simply use the function name followed by the arguments in parentheses:
  */
let result = square(5); // returns 25
/*
    Functions can also have multiple parameters, like this:
*/

function add(x, y) {
  return x + y;
}

/*
In this case, the add function takes two parameters, x and y, and returns their sum.

JavaScript also has a special type of function called an "arrow function," which uses a shorter syntax. Here's the same square a function defined using an arrow function:
  */
const square = (x) => {
  return x * x;
};

/*
Arrow functions are often used when you want to create a small, one-line function that doesn't require a separate function keyword.

Functions can be defined inside other functions, which is known as "nesting." This is useful for creating smaller, reusable blocks of code that can be called from within the larger function.
*/

function outerFunction(x) {
  function innerFunction() {
    // code to be executed
  }
  // more code
}

/*
In this example, the innerFunction is defined inside the outerFunction and can only be called from within that function.

In addition to these basic concepts, there are many other things you can do with functions in JavaScript, such as passing functions as arguments, creating anonymous functions, and using higher-order functions. These advanced techniques can make your code more efficient and flexible, and are essential tools for any JavaScript developer.
*/
