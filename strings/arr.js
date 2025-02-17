//array is a collection of elements that can have similar   data types. its has continous memory location.start from index 0. and have fixed size.

 //push() method adds new items to the end of an array, and returns the new length.

 const arr=[1,2,3,4,5,6,7,8,9,10];
arr.push(12);
console.log(arr);  //[1,2,3,4,5,6,7,8,9,10,12]

//pop() method removes the last element from an array and returns that element. This method changes the length of the array.

const arr1=[1,2,3,4,5,6,7,8,9,10];
arr1.pop();
console.log(arr1);  //[1,2,3,4,5,6,7,8,9]

//shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

const arr2=[1,2,3,4,5,6,7,8,9,10];
arr2.shift();
console.log(arr2);  //[2,3,4,5,6,7,8,9,10]

//unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

const arr3=[1,2,3,4,5,6,7,8,9,10];
arr3.unshift(8);
console.log(arr3);  //[8,1,2,3,4,5,6,7,8,9,10]

//concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const arr4=[1,2,3,4,5,6,7,8,9,10];
const arr5=[11,12,13,14,15,16,17,18,19,20];
console.log(arr4.concat(arr5));  //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

//forEach() method executes a provided function once for each array element.
const arr6=[1,2,3,4,5,6,7,8,9,10];
function logThing(str){
    console.log(str);
}
arr6.forEach(logThing);  //1,2,3,4,5,6,7,8,9,10//how many elements in array it will print that many times.first element of array will print first and then function will call again and print second element of array and so on.
