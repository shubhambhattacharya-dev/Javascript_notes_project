//As we know, JavaScript is a single-threaded programming language. If I run this code locally, will the CPU cores reach 100% usage? Is that correct?
let sum=0;
for(let i=0;i<100000000000;i++){
    sum=sum+i;
}
console.log(sum);



//answer here =