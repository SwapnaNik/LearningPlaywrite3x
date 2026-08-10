let amul = null;
let val = amul ?? "Nandini Milk";
// nullish coalescing operator (??)
// returns the right-hand operand when the left-hand operand is null or undefined, 
// otherwise it returns the left-hand operand.
console.log(val);// Nandini Milk

let API_response = null;
let responseData = API_response ?? "{}";
console.log(responseData); // {}

let API_response = "Swapna" ;
let responseData = API_response ?? "{}";
console.log(responseData);// Swapna


