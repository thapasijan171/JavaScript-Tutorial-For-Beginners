// var vs let vs const
/* 
In JavaScript, there are three ways to declare variables: var, let, and const. Each of these keywords has its own rules and uses, and it is important to understand the differences between them in order to write effective and maintainable code.
*/

// var
/*
The "var" keyword is used to declare variables in JavaScript. It was introduced in the early days of the language and was the only way to declare variables for a long time. However, the "var" keyword has some limitations and has been largely replaced by the "let" and "const" keywords in modern JavaScript.

One of the main issues with "var" is that it is function-scoped, rather than block-scoped. This means that variables declared with "var" are accessible within the entire function in which they are declared, rather than just within the block of code in which they appear. This can lead to unexpected behavior and can make it difficult to reason about the scope of variables in your code.
*/

// let

/* 
The "let" keyword was introduced in ECMAScript 6 (also known as ES6) and is used to declare variables that can be reassigned later. "let" variables are block-scoped, which means that they are only accessible within the block of code in which they are declared. This makes them more predictable and easier to reason about than "var" variables.

For example:
*/

if (x > 10) {
  let y = 20;
  console.log(y); // 20
}
console.log(y); // ReferenceError: y is not defined

/* 
In this example, the "y" variable is declared with the "let" keyword and is only accessible within the block of the if statement. If you try to access it outside of the block, you will get a "ReferenceError" because "y" is not defined in that scope.
*/

// Const
/*
The "const" keyword was also introduced in ES6 and is used to declare variables that cannot be reassigned later. "const" variables are also block-scoped and behave similarly to "let" variables in that respect. However, the main difference is that "const" variables must be initialized with a value when they are declared and cannot be reassigned later.

For example:
*/
const PI = 3.14;
PI = 3.14159; // TypeError: Assignment to constant variable.
/*
In this example, the "PI" variable is declared with the "const" keyword and is assigned the value of 3.14. If you try to reassign a new value to "PI," you will get a "TypeError" because "PI" is a constant variable and cannot be changed.
*/

// Conclusion
/*
In summary, "var" is an old way of declaring variables that is function-scoped and can be reassigned. "let" is a newer way of declaring variables that is block-scoped and can be reassigned. "const" is a newer way of declaring variables that is block-scoped and cannot be reassigned. In modern JavaScript, it is generally recommended to use "let" and "const" instead of "var," as they provide better scoping and make it easier to write maintainable code.
*/
