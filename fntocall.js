//function can take onther functions as input

function sum(num1, num2,fnTocall) {
    let result= num1 + num2; // Directly returning the sum
    fnTocall(result);// now which use to call the result
}

function displayResult(data) {
    console.log("Result of the sum is: " + data);
}

function displayResultPassive(data) { // Renamed to maintain proper camelCase
    console.log("Sum's result is: " + data);
}
//you are only allowed to call one function after this
//how will you displayResult of a sum

// const ans= sum(4,6);
// displayResult(ans);

// now use fntocall function

// take a functions as an arugument to call another function - by use of fnTocall method

const ans=sum(1,2,displayResult);
//callback
// fnTocall- an argument
