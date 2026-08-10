//Arithmetic Operators 
/*example of arithmetic operators in JS + , - , * , / , % , ** */


let a = 10;
let b = 5;

let sum = a + b; // addition operator
let sub = a - b; // subtraction operator
let mul = a * b; // multiplication operator
let div = a / b; // division operator

console.log("Sum: " + sum); // Output: Sum: 15
console.log("Subtraction: " + sub); // Output: Subtraction: 5
console.log("Multiplication: " + mul); // Output: Multiplication: 50
console.log("Division: " + div); // Output: Division: 2


//modulus operator = % -> it returns the remainder of a division operation
let mod = a % b;        
console.log("Modulus: " + mod); // Output: Modulus: 0


//exponentiation operator = ** -> it returns the result of 
// raising a number to a power

let exp = a ** b;        
console.log("Exponentiation: " + exp); // Output: Exponentiation: 100000
console.log("Exponentiation: " + (2 ** 3)); // 2 power of 3 > Output: Exponentiation: 8

//--------------------

let x = 10;
x += 5; // x = x + 5
console.log("x: " + x); // Output: x: 15

x -= 3; // x = x - 3
console.log("x: " + x); // Output: x: 12    