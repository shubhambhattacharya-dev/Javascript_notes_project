// string 
//1.string.length//not a function
let name="shubham";
let lastName="bhattacharya";
console.log(lastName.length);
//2.indexof//function
const text="hello world";
console.log(text.indexOf("orld"));
console.log(text.indexOf("x"));//-1 means not find it
//3.lastindexof 
const text1="shubham bhattacharya";
console.log(text1.lastIndexOf("bhattacharya"));
//4.slice
const text2="shubham bhattacharya";
console.log(text2.slice(0,5));// 0 starting point but 5 is not included here ,before 5th position element include only not 5th element
//substring- not longer use 
const text3="shubham kumar bhattacharya";
console.log(text3.substring(0,5));//its start from 0 and give length of 5 of the string
//5.replace - 
const text4="hello world";
console.log(text4.replace("ld","shubham"));
//6.split
const text5="shubham kumar bhattacharya";
console.log(text5.split("h"));// is split according to your delimeter . what is delimeter (string.split("here delimeter writen"));
//7.trime
text6="           shubham bhatachahujkk                 ";//its trime the extra space at starting and at the ending but not in between or middle 
console.log(text6.trim());
//8.toLowercase
const text7="SHUBHAM BHATTACHARYA";
console.log(text7.toLowerCase());
//9.touppercase
const text8="shubham bhattacharya";
console.log(text8.toUpperCase());
//split and slice is good one use in future;

