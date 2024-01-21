// Map, Filter and Reduce
/**
 One of the most important data structures in JavaScript is the array, which is a collection of elements. When working with arrays, it is often necessary to manipulate the elements in various ways, which is where the built-in methods map, filter, and reduce come in. In this blog post, we will explore how to use these methods to manipulate arrays in JavaScript.
 */

/*
 Map - The map method is used to create a new array with the result of a callback function called on each element in the original array. The callback function takes one argument, the current element, and returns the new value for that element. For example, the following code will return an array of each element multiplied by 2:
 */
var myArray = [1, 2, 3, 4, 5];
var multipliedArray = myArray.map(function (element) {
  return element * 2;
});
console.log(multipliedArray); // [2, 4, 6, 8, 10]

/*
Filter - The filter method is used to filter an array based on a certain condition. The filter method takes a callback function as its argument, which is called on each element in the array. If the function returns true, the element is included in the new filtered array. For example, the following code will return an array of all even numbers in the original array:
*/
var myArray = [1, 2, 3, 4, 5];
var evenNumbers = myArray.filter(function (element) {
  return element % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

/*
Reduce - The reduce method is used to reduce an array to a single value. The reduce method takes a callback function as its argument, which is called on each element in the array. The callback function takes two arguments, the accumulator and the current element, and returns the new value for the accumulator. For example, the following code will return the sum of all elements in the array:    
*/
var myArray = [1, 2, 3, 4, 5];
var sum = myArray.reduce(function (acc, cur) {
  return acc + cur;
}, 0);
console.log(sum); // 15

/*    It's important to note that these methods work on the original array and doesn't change it, it returns a new array.

Combining these three methods can be powerful, for example, you can filter an array, then map the filtered array, and finally reduce the mapped array.

In conclusion, understanding and utilizing the map, filter, and reduce methods in JavaScript can greatly improve your ability to manipulate arrays and perform complex operations on them. These methods are not only more concise but also more efficient than traditional loops and make your code more readable.

*/
