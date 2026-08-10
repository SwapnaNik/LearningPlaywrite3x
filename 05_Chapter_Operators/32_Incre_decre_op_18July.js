//Increment and decrement operators are used to increase or decrease the value of a variable by 1. 
/*
Two types of increment and decrement : 

1.Pre increment operator (++i): Increments the value of i by 1 and returns the new value of i.
2.Post increment operator (i++): Returns the current value of i and then increments the value of i by 1.    
3.Pre decrement operator (--i): Decrements the value of i by 1 and returns the new value of i.
4.Post decrement operator (i--): Returns the current value of i and then decrements the value of i by 1.

*/

//Pre - increment operator (++i)
let a=10;
let b = ++a;
console.log(b); // 11 , Pre increment operator increments the value first by 1 and returns the new value of a, which is 11.

//Post - increment operator (i++)
let a=10;
let b = a++;
console.log(b); // 10 , Post increment operator returns the current value of a, which is 10, and then increments the value of a by 1. So, the new value of a is 11.
console.log(a); // 11 , The new value of a is 11 after the post increment operation.


Examples:

let a=10;
console.log(++a + a); // 22 , Pre increment operator increments the value of a by 1 and returns the new value of a, which is 11. Then, it adds the new value of a (11) to the current value of a (11), resulting in 22.
console.log(a); // 11 , The new value of a is 11 after the pre increment operation.



