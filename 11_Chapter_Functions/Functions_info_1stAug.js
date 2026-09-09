/*
## What is a Function?
>  JavaScript, if you remember, is all about functions.



- A function is a **reusable block of code that performs a specific task.** 
- Instead of repeating logic, **you define it once** and call it whenever needed.


1. Define / Definition a Function.
2. Calling of Functions


> **Definition**

function name(param){

   // code which is repeated that you execute.

}



> **Calling**

name(90); // argument

---

**There are four types of functions which exist (JS)**

-  no return type. No arguments 
- with return type No arguments.
-  with argument, no return
-  with arguments and with return 

*/

/*## Console.log vs Return
`**console.log**` = print to terminal/devtools (side effect, for humans). 

`**return**` = send value back to caller (data flow, for code).

function addLog(a, b) {
  console.log(a + b);    // prints, returns nothing
}

function addReturn(a, b) {
  return a + b;          // gives value back
}

let x = addLog(2, 3);       // prints something, x = undefined
let y = addReturn(2, 3);    // prints nothing, y = 5


*/

function add(a,b)
{
    console.log("Add funtion prints : " , a+b);
}

function addReturn(a,b)
{
    return a+b;
    //console.log("Addreturn function :");
}

add(10,20);
console.log("Addreturn function :", addReturn(10,20));


// Add funtion prints :  30
// Addreturn function : 30