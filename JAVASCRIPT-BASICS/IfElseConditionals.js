// If else conditionals
/*
The "if" statement in JavaScript is used to execute a block of code if a certain condition is met. The "else" clause is used to execute a block of code if the condition is not met.

Here is the basic syntax for an "if" statement:
*/
if (condition) {
  // code to be executed if condition is true
}
//   Here is the syntax for an "if" statement with an "else" clause:
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}

/*
  The condition is a boolean expression that evaluates to either true or false. If the condition is true, the code in the "if" block is executed. If the condition is false, the code in the "else" block is executed (if present).

For example:
  */
let x = 10;
if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}

// In this example, the condition "x > 5" is true, so the code in the "if" block is executed and the message "x is greater than 5" is printed to the console
