
//prompt is webfunction 
//its not a node js function ... only node js function can run

let num = prompt("Enter a number");
num = Number(num); // convert string to number 

if(num % 2 === 0)
{
    console.log(num + " is even");
}
else
{ 
    console.log(num + " is odd");
}

//OP- ReferenceError: prompt is not defined as its not a node js function
// so to remove this error check next 49_Node_JS.js



