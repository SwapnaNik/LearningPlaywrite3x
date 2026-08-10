//MAp is a inbuilt function

//Map:
// It is used when you want to transform each element of an array.
// For example:
// multiply numbers
// convert strings to uppercase
// add a prefix to names
// create a new array from an old one

let scores = [45, 82, 91, 60, 73];
console.log("Original Array with scores: - " , scores)
console.log("MAP function: ");
let grades = scores.map(item_score => item_score > 70 ? "Pass": "Fail");
console.log(grades);

// Map My app is generally used whenever we want to 
// transform the array into a new array of the same size. 

//--------------------------------------------------------
// Filter:
console.log("FILTER function : ");
let passing = scores.filter(s => s >= 70); // it will check condtion with
// each array element and fiter that marks which are greater than 70
console.log(passing);

//OP= 
// [ 'Fail', 'Pass', 'Pass', 'Fail', 'Pass' ]
// [ 82, 91, 73 ]

//--------------------------------------------------------

//Reduce:
console.log("REDUCE function: ");
let total = scores.reduce((sum,s) => sum + s, 0);//sum = accumulator (running total)
// s = current array value
// 0 = starting value
// So it adds all scores step by step:
//45 + 82 + 91 + 60 + 73 = 351
console.log(total); // 351

//Alternate for reduce code is below

let sum = 0;
for(i=0;i<scores.length;i++)
{
    sum = sum + scores[i];

}
console.log("Sum using For Loop :", sum);


