let a =10;
console.log(++a + a + a++);
console.log(a);
/*
++a = 11
a = 11
a++ = 11 >> new val a = 12

11 + 11 + 11 = 33
a= 12
*/


let i = 1;
let result = i++ + ++i;
console.log(result,i); // 4 3 , Latest value of i is 3, result is 4 because i++ returns 1 and ++i returns 3, so 1 + 3 = 4
/*
A = i++ = 1
new i = 2
B =++i = 2+1 = 3
new i = 3
result = A + B = 1 + 3 = 4
*/


//Hard interview question:

//1)
let a = 10;
console.log(++a + a++); // 10+1 = 11 , 11 == > 11 + 11 = 22
console.log(a); // new value of a++ is 12


//2)
let a = 34;
let result = a++;
console.log(result); //a++ = 34 then it will incremant as 34+1 = 35
console.log(a); // 35

//Practice question:

let a =100;
console.log(a++ + ++a + a++ + ++a); 
// A = 100 , B = new a = 101 and 101+1=102 , 
// C= 102 and new a = 103, D = 103+1 = 104 
// 100 + 102 + 102 + 104 = 408
console.log(a);


//Decrement operator:

let a = 37;
console.log(--a + a--); //  37-1=36 , 
// 36  >> 36+36 = 72 , new a = 36-1 = 35
console.log(a); // 35

let a = 5;
let b = a-- - --a; // a-- = 5 , new a = 4
// --a = 4-1=3 , new a = 3
// 5- 3 = 2 >> b = 2 , new a = 3
console.log(b,a);


let i = 1;
let r = i++ > 1 ? i++ : ++i;// i++ = 1 , new i = 2
// 1 > 1 = false , so it will go to ++i = 2+1 = 3 , new i = 3
// r = 3 , new i = 3
console.log(r,i);

