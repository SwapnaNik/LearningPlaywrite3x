//Rule of thumb :
// == - loose equality does type coercion surprisingly often   
// === - strict equality does not do type coercion, so it is more predictable and less confusing           

console.log("" == 0); // true - Empty string is considered equal to 0 in loose equality
console.log("" === 0); // false - Empty string is not equal to 0 in strict equality 

console.log("0" == 0); // true - String "0" is considered equal to number 0 in loose equality
console.log("0" === 0); // false - String "0" is not equal to number 0 in strict equality

console.log("" == "0"); // false - Empty string i.e. "" is equal 0 but , "0" has 1 character, so they are not equal in loose equality   

console.log("" === "0"); // false