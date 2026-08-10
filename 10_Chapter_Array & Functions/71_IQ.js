//Interview Questions:

let nums = [10,25,30,45];

console.log(nums.length);

let result = nums.find(x => x > 20);//it will find matching element and will check the matching condition
//also will return 1st matching element > x is temp varible
console.log(result);//25


//find Index
let index = nums.findIndex(x => x>20);
console.log("index", index);//25 has 1 index in array 

console.log(nums.findLast(x => x>20));// Last element : 45
console.log(nums.findLastIndex(x => x>20)); //Last Index :  3