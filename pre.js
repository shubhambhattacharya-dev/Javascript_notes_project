// Primitive and Non-Primitive Data Types in JavaScript

// NUMBER
let balance = 120; // Primitive type: number
console.log(typeof balance); // Output: "number" (tells the data type of `balance`)
console.log(balance); // Output: 120 (prints the value of `balance`)

// Non-Primitive (Object) representation of a number
let anotherBalance = new Number(120); // Creates a number as an object
console.log(anotherBalance); // Output: [Number: 120] (shows the value and its type as an object)
console.log(anotherBalance.valueOf()); // Output: 120 (extracts only the value from the object)
console.log(typeof anotherBalance); // Output: "object" (because it's an object, not a primitive type)

// Difference:
// - `balance` is a primitive type (simple number).
// - `anotherBalance` is a complex (non-primitive) object wrapping a number.
// - Using objects for primitives (e.g., `new Number`) is not recommended unless necessary.

// BOOLEAN
let isActive = true; // Primitive type: boolean
console.log(typeof isActive); // Output: "boolean"
console.log(isActive); // Output: true (simple boolean value)

let isReallyActive = new Boolean(true); // Non-primitive boolean (object)
console.log(typeof isReallyActive); // Output: "object"
console.log(isReallyActive); // Output: [Boolean: true]

// Note: Avoid `new Boolean()` because it creates an object instead of a simple boolean value.
// This can lead to unexpected behavior when comparing values.

// NULL and UNDEFINED
let firstname; // Undefined: variable is declared but not assigned a value
console.log(firstname); // Output: undefined (default value for uninitialized variables)

let surname = null; // Null: explicitly assigned as "empty"
console.log(surname); // Output: null (a deliberate assignment to indicate "no value")

// Difference:
// - `undefined` means a variable exists but hasn't been given a value.
// - `null` means the variable is explicitly assigned to represent "no value."

// STRING
let myString = "hello"; // A simple string
let petName = "Shubham"; // Another string

// Old way of combining strings (string concatenation)
let oldGreet = myString + " " + petName; // Combining strings manually
console.log(oldGreet); // Output: "hello Shubham"

// Modern way using template literals (introduced in ES6)
let greetMessage = `Hello ${petName}!`; // String interpolation using `${}`
console.log(greetMessage); // Output: "Hello Shubham!"

// Template literals allow inline expressions
let demoOne = `The value of 2 + 6 is: ${2 + 6}`; // Computation inside a string
console.log(demoOne); // Output: "The value of 2 + 6 is: 8"

// SYMBOL
// Symbols create unique values, even if they have the same description
let sem1 = Symbol("shubham");
let sem2 = Symbol("shubham");

console.log(sem1 === sem2); // Output: false (each symbol is unique in memory)
console.log(sem1); // Output: Symbol(shubham) (represents a unique value)

// Symbols are often used as unique keys in objects
