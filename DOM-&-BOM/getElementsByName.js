// getElementsByName

/*
The getElementsByName() method is a part of the JavaScript document object and it allows developers to access multiple elements on a web page by their name attribute. This method returns a live HTMLCollection of elements with the given name attribute, or an empty HTMLCollection if no such elements are found.

For example, consider the following HTML code:
*/

// html file 

{
    /*
    <input type="text" name="myName" value="">
    <input type="text" name="myName" value="">
    <input type="text" name="myName" value="">

    */
}

/*
The following JavaScript code can be used to access the elements with the name attribute "myName" and change their value:
*/
let elements = document.getElementsByName("myName");
for (let i = 0; i < elements.length; i++) {
    elements[i].value = "This is my new value";
}

/*
The getElementsByName() method is a convenient way to access multiple elements on a web page, as it allows developers to select elements based on their name attribute, which is a common way to group elements with similar functionality. For example, radio buttons or checkboxes that are related to a certain topic should have the same name attribute. This method is especially useful when working with large and complex web pages, as it allows developers to quickly and easily access multiple elements that share the same name attribute.

It's important to note that the getElementsByName() method returns a live HTMLCollection, which means that the collection is updated automatically as elements are added or removed from the web page. Also, this method is case-sensitive, meaning that "myName" and "myname" are considered to be different name attributes.

In conclusion, the getElementsByName() method is a powerful tool for accessing multiple elements on a web page by their name attribute. Understanding how to use this method is essential for creating dynamic and interactive web pages, as it allows developers to quickly and easily access multiple elements that share the same name attribute. However, it's important to keep in mind that the method returns a live HTMLCollection and is case-sensitive. Additionally, this method is mostly used for form elements like radio buttons, checkboxes and input fields.
*/
