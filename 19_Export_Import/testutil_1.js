//Import and Export - 

/*
In TypeScript, import and export are used to share code between files.
TypeScript supports both named and default exports


1) export
Use export to make something available to other files.

// File 1 - math.ts
export const add = (a: number, b: number) => a + b;
export const pi = 3.14;



2) import
Use import to bring that exported code into another file.

// File 2 - app.ts
import { add, pi } from "./math";

console.log(add(2, 3)); // 5
console.log(pi); // 3.14


Why it matters
It helps:

organize code into separate files
reuse functions/classes/variables
keep projects clean and maintainable
*/


//Example - 
export let BASE_URL = "https://app.vwo.com";

export function formatUpperCaseString(sname) {
    return sname.toUpperCase();
}

let fname = "Pramod"; // is local to this file only

//Above code explaination:
//1) export let BASE_URL = "https://app.vwo.com";
// This creates a variable named BASE_URL
// It stores the value:
// "https://app.vwo.com"
// export means this value can be used in another file
// import { BASE_URL } from "./testutil_1.js";
// console.log(BASE_URL);

// OP- https://app.vwo.com

// 2) export function formatUpperCaseString(sname) { ... }
// This creates a function called formatUpperCaseString
// It accepts a parameter sname
// It converts the string to uppercase using:

// sname.toUpperCase()

// export makes this function available to other files
// Example:
// import { formatUpperCaseString } from "./testutil_1.js";

// console.log(formatUpperCaseString("hello"));

// Output:
// HELLO

// 3) let fname = "Pramod";
// This creates a local variable fname
// It stores the string "Pramod"
// It is not exported, so it cannot be used outside this file
