function getStatus(code) {
    if (code >= 200 && code < 300) {
        return "Success";
    } else if (code >= 400 && code < 500) {
        return "client error";
    } else if (code >= 500) {
        return "server error";
    } else {
        return "unknown";
    }
}

console.log(getStatus(200)); // Success
console.log(getStatus(404));// client error
console.log(getStatus(500)); // server error


// Returns nothing → undefined
function logTest(name) {
    console.log(`Running: ${name}`);//template literal 
    // no return statement
}

logTest("Hi this is a a log");// Running: Hi this is a a log


function aaa() {
    return [2, 2, 3, 5, 4];
    /// return {"name : pramod"}; - object - key value pair 
}