// Loops with Arrays
/*
One of the most important data structures in JavaScript is the array, which is a collection of elements. When working with arrays, it is often necessary to iterate through each element in the array, which is where loops come in. In this blog post, we will explore how to use loops with arrays in JavaScript.

JavaScript provides several ways to iterate through an array, including the for loop, forEach method, and for...of loop.

for loop - This is the most basic way to iterate through an array. The for loop uses a counter variable that is incremented on each iteration. For example, the following code will print out each element in the array:
*/
var myArray = [1, 2, 3, 4, 5];
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

/*
forEach method - This method is a more concise way to iterate through an array. The forEach method takes a callback function as its argument, which is called on each element in the array. For example, the following code will print out each element in the array:
*/
var myArray = [1, 2, 3, 4, 5];
myArray.forEach(function (element) {
  console.log(element);
});

/*
for...of loop - This is a more recent addition to JavaScript, and it is the most concise way to iterate through an array. It allows you to iterate through the elements of an array without having to access the index, and it works with any iterable object, not just arrays. For example, the following code will print out each element in the array:
*/
var myArray = [1, 2, 3, 4, 5];
for (var element of myArray) {
  console.log(element);
}

// It is important to note that when you are iterating through an array using a for loop and you plan to change the array during iteration you should use a for loop with a separate counter variable.
