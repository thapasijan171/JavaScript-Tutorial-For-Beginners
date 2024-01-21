// getElementsByTagName

/*
The getElementsByTagName() method is a part of the JavaScript document object and it allows developers to access multiple elements on a web page by their HTML tag name. This method returns a live HTMLCollection of elements with the given tag name, or an empty HTMLCollection if no such elements are found.

For example, consider the following HTML code:
*/

// html file
{
  /*
        <p>This is my paragraph</p>
        <p>This is my paragraph</p>
        <p>This is my paragraph</p>
    */
}

/*
The following JavaScript code can be used to access the <p> elements on the web page and change their text:
*/
let elements = document.getElementsByTagName("p");
for (let i = 0; i < elements.length; i++) {
  elements[i].innerHTML = "This is my new text";
}

/*
The getElementsByTagName() method is a convenient way to access multiple elements on a web page, as it allows developers to select elements based on their HTML tag name. This method is especially useful when working with large and complex web pages, as it allows developers to quickly and easily access multiple elements of the same type.

It's important to note that the getElementsByTagName() method returns a live HTMLCollection, which means that the collection is updated automatically as elements are added or removed from the web page. Also, this method is case-sensitive, meaning that "p" and "P" are considered to be different tag names.

In conclusion, the getElementsByTagName() method is a powerful tool for accessing multiple elements on a web page by their HTML tag name. Understanding how to use this method is essential for creating dynamic and interactive web pages, as it allows developers to quickly and easily access multiple elements of the same type. However, it's important to keep in mind that the method returns a live HTMLCollection and is case-sensitive. It's a good practice to use this method in combination with other methods like getElementById and getElementsByClassName to target specific elements on the web page.
*/
