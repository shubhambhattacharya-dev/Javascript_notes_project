// Object 

// SYNTAX:

let userName = { // Non-primitive datatype
       firstName: "Shubham", // Primitive datatype
       isLoggedIn: true      // Primitive datatype
   };
   
   // Behind the Scene
   // - When you create an object, a significant amount of memory space is reserved.
   // - Objects always work with key-value pairs.
   // - IMPORTANT: Use a colon (:) to separate key and value, and use a comma (,) to separate different key-value pairs.
   
   // - Prefer using `const` instead of `let` for objects.
   // - With `const`, the object name cannot be reassigned, but the key-value pairs within the object can be modified.
   // - When `const` is used, memory space is reserved for the variable, but only the reference to the object is stored. The key-value pairs inside the object can still be updated.
   
   const userDetail = {
       userName: "Shubham",
       age: 19,           // Changed age to a number for better consistency.
       gender: "Male"
   };
   
   // Accessing the object
   console.log(userName); // Outputs the entire object
   
   // Accessing a particular key-value pair
   console.log(userName.firstName); // Dot notation
   console.log(userDetail["userName"]); // Square bracket notation
   
   // Adding or modifying key-value pairs
   userDetail.lastName = "Bhattacharya"; // Adds a new key-value pair
   userDetail.age = 20; // Modifies the existing key-value pair
   console.log(userDetail);
   
   // Creating and working with built-in objects
   let today = new Date();
   console.log(today); // Outputs the full date object
   
   // Accessing specific details of the Date object
   console.log(today.getDate()); // Outputs the current day of the month
   console.log(today.getFullYear()); // Outputs the current year
   console.log(today.toLocaleDateString()); // Outputs the date in a localized format
   
   // Additional feature: Iterating over an object's properties
   console.log("Iterating over userDetail properties:");
   for (let key in userDetail) {
       console.log(`${key}: ${userDetail[key]}`); // Outputs each key-value pair
   }
   
   // Additional feature: Checking if a property exists
   console.log("Checking properties:");
   console.log("userName exists:", userDetail.hasOwnProperty("userName")); // true
   console.log("address exists:", userDetail.hasOwnProperty("address")); // false
   
   // Shortcuts
   // Use Ctrl+D in editors like VS Code to edit and modify the same text in multiple places simultaneously.
   