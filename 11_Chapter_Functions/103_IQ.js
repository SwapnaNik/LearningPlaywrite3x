greet("Alice");

function greet(name) {
    console.log('Hi');// ❌ TypeError: greet is not a function
    return `Hello, ${name}!`;
}

sayHi("Bob"); // ❌ TypeError: sayHi is not a function

const sayHi = function (name) {
    return `Hi, ${name}!`;
};