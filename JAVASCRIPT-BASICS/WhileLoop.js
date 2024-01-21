// While Loop
/*
While loops are a control flow structure in programming that allow you to repeat a block of code while a certain condition is true. In JavaScript, the syntax for a while loop is:
 */
while (condition) {
  // code to be executed
}

/*
  The condition is checked at the beginning of each iteration and if it is true, the code block is executed. If it is false, the loop exits.

Here's an example of a while loop that counts from 1 to 10:
  */

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

/*
This loop will print the numbers 1 through 10 to the console.

It's important to include a way to update the condition within the loop, otherwise it will become an infinite loop and will run forever. In the example above, the i++ statement increments the value of i by 1 at the end of each iteration, which eventually causes the condition to be false and the loop to exit.

While loops can be useful when you don't know exactly how many times you need to execute a block of code. For example, you might use a while loop to keep prompting a user for input until they provide a valid response.
*/

let input = "";

while (input !== "yes" && input !== "no") {
  input = prompt("Please enter 'yes' or 'no':");
}

/*
This loop will keep prompting the user for input until they enter either "yes" or "no".

While loops can be a useful tool in JavaScript, but it's important to use them with caution. If the condition is never met, the loop will become an infinite loop and will run forever. Make sure to include a way to update the condition and eventually exit the loop to avoid this issue.
*/
