// To understand datatypes, the best way is to write clear comments. 
// (Shortcut for adding comments in many editors: Ctrl + /)

// In any programming language, you should know the basic datatypes: 
// string, number, boolean, BigInt, object, symbol, undefined, and null.

// Difference between undefined and null:
// - `undefined` means a variable has been declared but has no value assigned yet. 
//   It indicates something exists but is not defined yet (could be defined in the future).
// - `null` represents the intentional absence of any value. 
//   It means "empty" or "nothing" but not zero.

// One advantage of JavaScript is that you don't need to explicitly define the datatype of a variable.
// Variables are like buckets that store data, and JavaScript determines the type automatically.

var score = 102;
var score2 = 203;
// 'var' is the older way of declaring variables and is function-scoped.

let score3 = 102;
// Use 'let' to declare variables, as it's the modern way and block-scoped.

let name = "Shubham"; // string datatype
let isLoggedIn = false; // boolean datatype

// Object examples:
// Array (a type of object)
let names = ["Shubham", "Manish", "Raju"]; 

// Object with key-value pairs
let user = { 
    firstname: "Shubham", 
    lastname: "Bhattacharya" 
};

// You can also borrow another variable's value:
let newName = name; 
console.log(newName); // Output: Shubham
