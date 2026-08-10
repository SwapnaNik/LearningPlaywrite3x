// Slice & Combining

let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array, 
// does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically 
// take from start to end.

//let arr = [1, 2, 3, 4, 5];
// slice(start, end)
// ✔ Returns a NEW array.
// ✔ Does NOT modify (mutate) the original array.
// ✔ start index is included.
// ✔ end index is excluded.
// ✔ Array indexing starts from 0.
// ✔ If 'end' is omitted, it returns elements from 'start' to the end of the array.

console.log(arr.slice(1, 3)); // 1 and 3 are index so start from 1 index and
//end with 3-1 = 2 index which is 3 element value
// OP- [2, 3] 
console.log("----------------------------");

console.log(arr);
//OP - [ 1, 2, 3, 4, 5 ]

console.log("----------------------------");


//If not mention the end index it will return all index elemnt from start index
console.log("arr.slice(2) : If end index omitted it will return all remaining elements:");
console.log(arr.slice(2));

console.log("----------------------------");

console.log("Negative index from -2 index : ")
console.log(arr.slice(-2)); // Right side.

console.log("----------------------------");

console.log("Negative index from -3 index : ")
console.log(arr.slice(-3));

console.log("----------------------------");

console.log("All elements  : ")
console.log(arr.slice(0));

console.log("----------------------------");

console.log("index from -5  : ")
console.log(arr.slice(-5));

console.log("----------------------------");

console.log("It will go right side but end index is -5 so it will retun nothing : ")
console.log(arr.slice(-3, -5));