// Original array of people
let person = ["shubham", "bhattacharya", "karan"];
console.log(person[4]); // Still undefined (no fix needed here)

// Array of ages
let ages = [43, 2, 4, 45, 67, 23, 45, 76, 23, 5, 6, 78, 98, 66];

// Loop through the array correctly
for (let i = 0; i < ages.length; i++) { // Use ages.length directly
  if (ages[i] % 2 === 0) {
    console.log(ages[i]); // Fixed typo: "ages" instead of "age"
  }
}

