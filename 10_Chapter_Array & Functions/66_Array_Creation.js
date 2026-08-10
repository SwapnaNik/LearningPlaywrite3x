//Array Literals (prefrred way to create an array)
let browser = ["Chrome", "Firefox", "Webkit"];
console.log(browser.length); //3


//---------------------------------------
//Array constructor
let scores = new Array(3); //creates an array of length 3 with empty slots
console.log(scores.length); //3
scores[0] = 10;
scores[1] = 20;
scores[2] = 30;
console.log(scores); //[ 10, 20, 30 ]



let scores2 = new Array(4,5,6); //creates an array with 3 elements
console.log(scores2.length); //3
console.log(scores2); //[ 4, 5, 6 ]
//**make sure which type of array creation you use and mention it 
// in the skill file or .md rule file 

//---------------------------------------

let numbers = new Array(100,200,300,400);//creates an array with 4 elements
console.log(numbers.length); //4

//---------------------------------------

//Another way to create an array is using Array.of() method. 
//It creates a new Array instance with a variable number of arguments, 
// regardless of number or type of the arguments.
let test = Array.of(10,20,30,40); //creates an array with 4 elements
console.log(test.length); //4



