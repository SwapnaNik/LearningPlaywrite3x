//Interview questions:

let environment = "staging";
let baseUrl = environment === "Prod" ? "http://api.example.com" : "http://staging-api.example.com";

console.log(baseUrl); // OP - http://staging-api.example.com

//check condition that environment is staging which is not equal to prod 
// so false condition will execute



