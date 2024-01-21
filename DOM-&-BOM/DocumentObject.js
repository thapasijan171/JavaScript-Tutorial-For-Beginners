// Document Object

/*
The JavaScript document object is a part of the window object and represents the current web page. It allows developers to access and manipulate the elements of the web page, as well as the Document Object Model (DOM) tree that represents the structure of the web page.

One of the most commonly used methods of the document object is the getElementById() method. This method allows developers to access a specific element on the web page by its unique ID. For example, the following code can be used to change the text of an element with the ID "myElement":
*/
document.getElementById("myElement").innerHTML = "This is my new text";

/*
Another important method is getElementsByClassName() method which returns a live HTMLCollection of elements with the given class name. It can be used to access multiple elements with the same class name.
*/
let elements = document.getElementsByClassName("myClass");
for (let i = 0; i < elements.length; i++) {
  elements[i].innerHTML = "This is my new text";
}

/*
The document object also provides several methods for creating new elements and adding them to the web page, such as createElement() and createTextNode(). For example, the following code can be used to create a new div element and add it to the web page:
*/
let newDiv = document.createElement("div");
document.body.appendChild(newDiv);

/*
It's important to note that the document object is a part of the DOM API and it is supported by all modern browsers, but it's important to check for browser compatibility before using it.

In conclusion, the JavaScript document object provides a powerful set of tools for accessing and manipulating the elements of the web page and the Document Object Model (DOM) tree. Understanding how to use the document object is essential for creating dynamic and interactive web pages, but it's important to keep in mind its limitations and check browser compatibility before using it.
*/
