//Arrays are ordered collection of items. 
// Each item in an array has a numeric position called an index. 
// The first item has an index of 0, the second item has an index of 1, and so on.
//JS arrays are dynamic, meaning you can add and remove items from them.
//and can hold mixed type
//An ordered, zero indexed, mutable collection of values of any type.
//typeof [] is "Object" but it is not an object, it is an array.
//use Array.isArray() method to check if a variable is an array or not.

let fruit = [];
let browser = ["Chrome", "Firefox", "Webkit"];
console.log(browser[0]); //Chrome
console.log(browser[1]); //Firefox

//For negative index use "at()" method, it will return the item from 
// the end of the array.
console.log(browser.at(-1)); //Webkit 

console.log(browser.at(0)); //Chrome
console.log(browser.length); //3
console.log(fruit.length); //0
console.log(browser[-1]); //undefined
