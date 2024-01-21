// Arrays and Array Methods

/* 
One of the most important data structures in JavaScript is the array, which is a collection of elements. In this blog post, we will explore the basics of JavaScript arrays and the various array methods that can be used to manipulate them.

An array in JavaScript is a collection of elements enclosed in square brackets. Elements can be of any data type, including numbers, strings, and other arrays. For example, the following is a valid array in JavaScript:
*/
var myArray = [1, "Hello", [2, 3]];

// JavaScript provides a number of built-in methods for manipulating arrays. Some of the most commonly used array methods are: //

/* 
length - This method returns the number of elements in an array. For example, the following code will return 3:
*/
var myArray = [1, "Hello", [2, 3]];
console.log(myArray.length);

/*
 push - This method is used to add an element to the end of an array. For example, the following code will add the element "World" to the end of the array:
*/
var myArray = [1, "Hello", [2, 3]];
myArray.push("World");
console.log(myArray); // [1, "Hello", [2, 3], "World"]

/* 
pop - This method is used to remove the last element of an array. For example, the following code will remove the last element ("World") from the array:
*/
var myArray = [1, "Hello", [2, 3], "World"];
myArray.pop();
console.log(myArray); // [1, "Hello", [2, 3]]

/*
shift - This method is used to remove the first element of an array. For example, the following code will remove the first element (1) from the array:
*/
var myArray = [1, "Hello", [2, 3]];
myArray.shift();
console.log(myArray); // ["Hello", [2, 3]]

/*
unshift - This method is used to add an element to the beginning of an array. For example, the following code will add the element 0 to the beginning of the array:
*/
var myArray = [1, "Hello", [2, 3]];
myArray.unshift(0);
console.log(myArray); // [0, 1, "Hello", [2, 3]]

/*
slice - This method is used to extract a portion of an array. For example, the following code will extract the elements from index 1 to 2 (exclusive):
*/
var myArray = [1, "Hello", [2, 3]];
console.log(myArray.slice(1, 2)); // ["Hello"]

/*
splice - This method is used to add or remove elements from an array. For example, the following code will remove the element at index 1 and add the elements "Hello World" and [4, 5] at index 1:
*/
var myArray = [1, "Hello", [2, 3]];
myArray.splice(1, 1, "Hello World", [4, 5]);
console.log("");
