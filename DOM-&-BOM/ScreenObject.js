// Screen Object
/*
The JavaScript screen object is a part of the window object and provides information about the device's screen properties. It allows developers to gather information about the screen resolution, color depth, and available screen area.

One of the most commonly used properties of the screen object is the width and height properties. These properties return the width and height of the device's screen in pixels, respectively. Developers can use these properties to create responsive designs and adjust the layout based on the screen size. For example, the following code can be used to log the screen resolution:
*/
console.log(`The screen resolution is ${screen.width}x${screen.height} pixels`);

/*
Another important property is the colorDepth property which returns the number of bits used to represent the color of a single pixel. This property can be used to check the color depth of the screen and make sure that images and videos are displayed correctly.
*/
console.log(`The screen color depth is ${screen.colorDepth} bits`);

/*
The screen object also provides the availWidth and availHeight properties, which return the width and height of the available screen area, respectively. This means the area available to the browser, not including the taskbar or other system interface elements.
*/
console.log(
  `The available screen width is ${screen.availWidth} pixels and the available screen height is ${screen.availHeight} pixels`
);

/*
It's important to note that the screen object is a part of the DOM API and it is supported by all modern browsers, but it's important to check for browser compatibility before using it. Also, the screen object properties will return the screen size of the device the browser is running on, and not the size of the window that the browser is running in.

In conclusion, the JavaScript screen object provides a powerful set of tools for gathering information about the device's screen properties such as resolution, color depth and available screen area. Understanding how to use the screen object is essential for creating responsive designs and adjusting the layout based on the screen size, but it's important to keep in mind its limitations and check browser compatibility before using it.
*/
