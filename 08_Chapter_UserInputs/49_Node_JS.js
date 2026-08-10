//OP- ReferenceError: prompt is not defined as its not a node js function

/*so node js has created alternate version for user InputDeviceInfo
they have created library with readline from this u can read standard Input
output

require -- library 

see below code for user input*/

const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,            
});



rl.question("Enter a number :" , (input) =>{
let num = Number(input); // convert string to number 

if(num % 2 === 0)
{
    console.log(num + " is even");
}
else
{ 
    console.log(num + " is odd");
}
rl.close();

});


/// So above is bit complex version so we are using below easy version
//const data = require('fs').readFileSync(0,'uft');
