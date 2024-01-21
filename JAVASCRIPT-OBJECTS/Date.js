// Date
/*
JavaScript's Date object allows you to work with dates and times in your scripts. It can be used to get the current date and time, or to manipulate and format dates and times in various ways.

Creating a new Date object is simple. You can either create a new date object with the current date and time by calling new Date() with no arguments, or you can create a date object with a specific date and time by passing in a string or numerical values.

Here's an example of how you can use the Date object to get the current date and time:
*/
var currentDate = new Date();
console.log(currentDate);

/*
You can also manipulate the date and time using the various methods available on the Date object. For example, you can use the setDate() method to set the day of the month, and the setFullYear() method to set the year.
*/
var date = new Date();
date.setDate(15);
date.setFullYear(2022);
console.log(date);

/*
You can also format the date and time using the toLocaleString() method, which allows you to specify the format and time zone.
*/
var date = new Date();
console.log(date.toLocaleString());
console.log(date.toLocaleString("en-US", { timeZone: "UTC" }));

// In this way, you can use the Date object in JavaScript to work with dates and times in your scripts, and to format and manipulate dates and times in various ways.
