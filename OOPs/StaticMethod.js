// Static Method
/*
In object-oriented programming, a static method is a method that is associated with a class, rather than an instance of the class. In JavaScript, static methods are defined using the static keyword and they can be accessed without creating an instance of the class.

For example, consider the following class MathHelper that defines a static method called add() that takes in two numbers and returns their sum:
*/
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

// You can access the static method directly from the class, without creating an instance of the class.

console.log(MathHelper.add(1, 2)); // 3

/*
Static methods are useful when you want to add utility methods to a class that don't depend on the state of an instance. For example, you might use a static method to generate a unique ID for an object, or to perform a calculation that doesn't depend on the state of an instance.

It's important to note that static methods do not have access to the this keyword, as they are not associated with an instance of the class. Instead, they can only access the arguments passed in to the method and any variables or functions defined within the class.

In conclusion, static methods in JavaScript are methods that are associated with a class, rather than an instance of the class. They are defined using the static keyword and can be accessed directly from the class, without creating an instance of the class. Static methods are useful when you want to add utility methods to a class that don't depend on the state of an instance. However, it's important to keep in mind that static methods do not have access to the this keyword.
*/
