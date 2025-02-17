const namef="shubham";
console.log(namef.length); //its gives me 7 as output b/c it counts the space as well and shubham has 7 characters including space.

//2.indexOf() method

const index="shubham bhattacharya";
console.log(index.indexOf('h')); //it gives me 1 as output b/c it starts counting from 0 and h is at 1st position. and also count the space as well.

//lastindexof() method
const last="shubham bhattacharya";
console.log(last.lastIndexOf('h')); //it gives me 15 as output b/c it starts counting from the end and
//h is at 15th position from the end and also count the space as well. where my code has error

//3.slice() method
const slice="shubham bhattacharya";
console.log(slice.slice(0,7)); //it gives me shubham as output b/c it starts counting from 0 and ends at 7th position.7thposition is not included.space is also counted.

//4.substring() method

const sub="my name is shubham";
console.log(sub.substring(0,5)); //its start from 0 and give me length 5 as output b/c it gives me my name as output. it does not count the space

//replace() method
const rep="my name is shubham";
console.log(rep.replace("shubham","world")); //it gives me my name is world as output b/c it replace the shubham with world.

//split() method

const split="my name is shubham";
console.log(split.split(" ")); //it gives me an array as output b/c it split the string where space is there. split on the basics of delimeter.what is delimeter? demimeter is a character that is used to split the string.

//trim() method
const trim="   my name is shubham   ";
console.log(trim.trim()); //it gives me my name is shubham as output b/c it removes the extra space from the string.//trime space from starting and ending.

//split and slice
 