// Operators and Expressions

/*
Operators in JavaScript are symbols that perform specific operations on one or more operands (values or variables). For example, the addition operator (+) adds two operands together and the assignment operator (=) assigns a value to a variable.

There are several types of operators in JavaScript, including:

- Arithmetic operators (e.g. +, -, *, /, %)
- Comparison operators (e.g. >, <, >=, <=, ==, !=)
- Logical operators (e.g. &&, ||, !)
- Assignment operators (e.g. =, +=, -=, *=, /=)
- Conditional (ternary) operator (e.g. ?:)
Expressions are combinations of values, variables, and operators that produce a result. For example:
*/

let x = 10;
let y = 20;
let z = x + y; // z is 30

/*
In this example, the expression "x + y" is evaluated to 30 and assigned to the "z" variable.

Operator precedence determines the order in which operators are applied when an expression has multiple operators. For example:
*/

let xe = 10 + 5 * 3; // x is 25
// Some errror for using xe

/*
In this example, the multiplication operator (*) has a higher precedence than the addition operator (+), so the multiplication is performed before the addition. As a result, the expression is evaluated as 10 + (5 * 3) = 25.

You can use parentheses to specify the order of operations in an expression. For example:
*/

let xa = (10 + 5) * 3; // x is 45

/*
In this example, the parentheses indicate that the addition should be performed before the multiplication. As a result, the expression is evaluated as (10 + 5) * 3 = 45.
*/

// Conclusion

/* 
In summary, operators are symbols that perform specific operations on one or more operands, and expressions are combinations of values, variables, and operators that produce a result. Operator precedence determines the order in which operators are applied in an expression, and parentheses can be used to specify the order of operations. Understanding how to use operators and expressions is an important part of programming in JavaScript.
*/
