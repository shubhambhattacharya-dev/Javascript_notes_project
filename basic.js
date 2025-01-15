// Printing in the terminal
// To run the code in the terminal, use: node <file_name> and press Enter

// The most common method is console.log (shortcut: type 'log' and press Tab in many editors)

console.log("Hello Shubham"); 
// Prints the message and adds a new line automatically every time it's called.

process.stdout.write("Hi, I am Shubham"); 
// Also used for printing, but it does not add a new line like console.log does.
// Remember, 'process' starts with a lowercase 'p'.

process.stdout.write("Hi, I am Shubham again");
// This continues on the same line since it doesn't add a new line automatically.

console.table({ city: "Bhagalpur" }); 
// Displays the data in a tabular format.

console.warn({ city: "Bhagalpur" }); 
// Logs a warning message, typically styled differently in the console (e.g., yellow text in Node.js).
