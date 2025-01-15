let gameName = "batman"; 
// Use 'let' when you are declaring a variable for the first time and assigning it a value.

gameName = "spiderman"; 
// You can change (override) the value of a 'let' variable.
console.log(gameName); // Output: spiderman

// 'const' (constant) is used to declare a variable that cannot be reassigned after its initial assignment.
// It reserves a fixed memory space for the value, and the value cannot be changed.

const name = "shubha"; 
// Trying to reassign a 'const' variable will cause an error.
name = "mainsh"; // This will throw a TypeError: Assignment to constant variable.
console.log(name); // Correct usage: Display the value of the variable.
