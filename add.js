/* String Methods and Properties */

//***********************************************

/* length Property */

/* var x = "Clarusway";
var y = "";

console.log (x.length);
console.log (y.length); */

//-----------------------------------------------

/* var myName = "Alex";
myNameLength = myName.length;

console.log(myNameLength); */ 

//***********************************************

/* concat() Method */

/* The concat() method is used to combine two or more strings. The concat() method can be used instead of the plus(+) operator.*/

/* var s1 = "Hello ";
var s2 = "World!";
var s3 = s1.concat(s2);
console.log(s3); */

//-----------------------------------------------

/* var x = "a, b";
var y= "c, d, e";
var z = x.concat(y);
console.log(z); */

//***********************************************

/* charAt() Method */

/* The charAt() method returns the char value at the specified index in a string. */

/* var x = "Clarusway";

console.log (x.charAt(0));
console.log (x.charAt(3)); */

//-----------------------------------------------

/* var x = "Alex";
console.log (x.charAt(2)); */

//***********************************************

/* includes() Method */

/* The includes() method specifies whether a string includes the characters of a specified string. This method returns true if the characters are in the string, and if not false.*/
/* The includes() method is case sensitive. */

/* var s = "Hello John, welcome to Clarusway.";
var n = s.includes("welcome");

console.log (n); */

//-----------------------------------------------

/* var s = "Hello John, welcome to Clarusway.";
var n = s.includes("Clarus");
console.log (n); */

//***********************************************

/* indexOf() and lastIndexOf() Method */

/* The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string: 
This method returns -1 if the value is not found. */

//-----------------------------------------------

/* var s = "Hello John, welcome to Clarusway.";
var n = s.indexOf("welcome");

console.log (n); */

//-----------------------------------------------

/* You can find second or other letters in the string with second parameter of indexOf() method. Find the first occurrence of the letter "e" in a string, starting the search at position 5: */

/* var s = "Hello John, welcome to Clarusway.";
var n = s.indexOf("e", 5);

console.log (n); */

//-----------------------------------------------

/* lastIndexOf() Method

The lastIndexOf() method returns the index of the last occurrence of a specified text in a string: */

//-----------------------------------------------

/* var s = "Hello John, welcome to Clarusway. How are you John?";
var n = s.lastIndexOf("John");

console.log (n); */

//-----------------------------------------------

/* var s = "Hello John, welcome to Clarusway.";
var n = s.indexOf("j");  // the value is not found.
console.log (n); 
 */

//***********************************************

/* replace() Method */

/* The replace() method looks for a string for a given value and returns a new string to replace the specified values. */

//-----------------------------------------------

/* var s = "Hello John, welcome to Clarusway.";
var rep = s.replace("Clarusway", "Course");

console.log (rep); */

//-----------------------------------------------

/* To replace case insensitive, use a regular expression with an /i flag (insensitive)*/

/* var str = "Hello John, welcome to Clarusway.";
var rep = str.replace(/JOHN/i, "Edward");

console.log (rep); */

//-----------------------------------------------

/* var s = "Hello John, welcome to Clarusway.";
var rep = s.replace("John", "Alex")
console.log (rep); */

//***********************************************

/* search() Method */

/* The search() method searches a string for a given value and returns the position of the match. This method returns -1 if the value is not found. The two methods, indexOf() and search(), are equal? NOT equal.*/

//-----------------------------------------------

/* var s = "Hello John, welcome to Clarusway.";

console.log (s.search("Clarusway")); */

//-----------------------------------------------

/* var s = "Hello John, welcome to Clarusway.";

console.log (s.search("Joe")); */

//***********************************************

/* slice() Method */

//-----------------------------------------------

/* var s = "Hello John, welcome to Clarusway.";

console.log (s.slice(0, 5));
console.log (s.slice(6, 10));
console.log (s.slice(12));
console.log (s.slice(12, -10)); */

//-----------------------------------------------

/* var s = "Hello John, welcome to Clarusway.";
var rest = s.slice(12);
console.log(rest) */

//-----------------------------------------------

/* var s = "Hello John, welcome to Clarusway.";
console.log (s.slice(12, 17)); */

//***********************************************

/* split() Method */

/* The split() method divides a string into an array of substrings, and returns the new array. The split() method does not alter the original string. */

//-----------------------------------------------

/* var s = "Hello John, welcome to Clarusway."

var arr = s.split(" ");

console.log (arr); */

//-----------------------------------------------

/* var s = "Hello John, how are you doing today?"
var arr = s.split(" ");
console.log (arr); */

//***********************************************

/* substr() Method */

/* The substr() method returns the parts of a string, beginning at the character at the specified position and a number of characters after it. The substr() method does not alter the original string.*/

//-----------------------------------------------

/* var s = "Hello John, welcome to Clarusway."

console.log (s.substr(23, 9)); */

//-----------------------------------------------

/* If you do not use the second parameter, substr() will slice out the rest of the string. */

/* var s = "Hello John, welcome to Clarusway."

console.log (s.substr(23)); */

//-----------------------------------------------

/* var s = "Hello John, welcome to Clarusway.";
 console.log (s.substr(12, 7)); */

//***********************************************

/* substring() Method */

/* The substring() method returns the parts of a string between "start" and "end", not including "end" itself. The substring() method does not alter the original string. */

//-----------------------------------------------

/* var s = "Welcome to Clarusway."

console.log (s.substring(5, 10)); */

//-----------------------------------------------

/* If you omit the second parameter, substring() will slice out the rest of the string. */

/* var s = "Welcome to Clarusway."

console.log (s.substring(5)); */

//-----------------------------------------------

/* var s = "Welcome to Clarusway."

console.log (s.substring(5, 1)); */

//***********************************************

/* toLowerCase() Method */

/* The toLowerCase() method transforms a string to lowercase letters. The toLowerCase() method does not alter the original string. */

//-----------------------------------------------

/* var s = "WELCOME TO CLARUSWAY";

console.log(s.toLowerCase()); */

//***********************************************

/* toUpperCase() Method */

/* The toUpperCase() method transforms a string to uppercase letters. The toUpperCase() method does not alter the original string. */

//-----------------------------------------------

/* var s = "Welcome to Clarusway"

console.log(s.toUpperCase()); */

//-----------------------------------------------

/* var s = "welcome to clarusway"

console.log (s. toUpperCase()); */

//***********************************************

/* trim() Method */

/* The trim() method eliminates whitespace from both sides of a string. The trim() method does not alter the original string. */

//-----------------------------------------------

/* var s = "                 Welcome to Clarusway                 "

console.log (s. trim()); */

//-----------------------------------------------

/* var s = "           Welcome to Clarusway          John         "

console.log (s. trim()); */

//***********************************************
//***********************************************

/* String primitive */

/* const message = 'hi';  // typeof string */


//***********************************************

/* String object */

/* const another = new String('hi'); // typeof object */

//***********************************************

/* var s = "Hello John, welcome to Clarusway.";

console.log (s.search("wel")); */

//***********************************************

/* var s = "Hello John, welcome to Clarusway."

console.log (s.substr(12)); */

//***********************************************

/* var s = "Hello John, welcome to Clarusway.";
var n = s.includes("john");

console.log (n); */

