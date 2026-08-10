//Searching

let result = ["PASS", "FAIL", "PASS", "ERROR", "FAIL"];
console.log(result);

//indexOf() -returns the first index , or  -1 if not found
//result.indexOf("FAIL");  
console.log(result.indexOf("FAIL"));  //1

console.log(result.indexOf("SKIP"));  //-1 - as SKIP is not found in the array

//LastIndexOf() - returns the last index, or -1 if not found
console.log(result.lastIndexOf("FAIL"));  //4

//includes() - returns boolean:  true or false
console.log(result.includes("ERROR"));  //true
console.log(result.includes("SKIP"));  //false

