//Spread operator (...) - is used to expand an array into individual elements.
//  It can be used in function calls, array literals, and object literals.
//  In the context of function calls, it allows you to pass an array of arguments to a function that expects individual arguments.

//spread function is 
function add(a, b, c) {
    return a + b + c;
}
let num = [1, 2, 3,5];//The function only has parameters a, b, and c, so the extra 5 is ignored. Output: 6
console.log(add(...num));//6 - as it will calculate 1st 3 values 1+2+3 =6  and ignore 4th value i.e 5

//Here ...num is the spread operator. It expands the array:add(1, 2, 3, 5);







// ----.some() checks whether at least one element in an array satisfies a condition.

function hasError(...codes) {
    return codes.some(c => c >= 400);//atleast one value is greater than or equal to 400, it will return true, otherwise false.
}

let responseCodes = [200, 201, 404];
let responseCodes2 = [200, 201, 101];
console.log(hasError(...responseCodes)); // true
console.log(hasError(...responseCodes2)); // false because none of the values are greater than or equal to 400


//This means:codes.some(c => c >= 400);
// Look at each code in codes
// Check whether c >= 400
// Return true as soon as one code is 400 or higher
// Return false if none match

//Here ...codes is the rest parameter. It collects all arguments into an array:hasError(200, 201, 404);
// codes becomes [200, 201, 404]
