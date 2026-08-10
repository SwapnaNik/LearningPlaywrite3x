// some other function js has provide  i.e. "prompt-sync"

const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number : "));

if(num % 2 === 0)
{
    console.log(num + " is Even");
}
else
{
    console.log(num + " is Odd");
}

//error - Error: Cannot find module 'prompt-sync' so install a module as below in terminal
// npm install -g prompt-sync
