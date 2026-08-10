var sum=0;
for(var i=1;i<=5;i++){
    sum +=i;
}
console.log(sum); //OP - 15 
//explain the code :
// sum += i;
// This means:
// take the current value of sum
// add the current value of i
// store the result back in sum

// So in each loop:
// First time: sum = 0 + 1 = 1
// Second time: sum = 1 + 2 = 3
// Third time: sum = 3 + 3 = 6
// Fourth time: sum = 6 + 4 = 10
// Fifth time: sum = 10 + 5 = 15


console.log("2nd example");
let j =0;
while(j< NaN){
    j++;
}
console.log(j); //OP - 0

console.log("3rd example");
let k = 3 , count = 0;
do{
    count++;
}while (k-- > 0);
console.log(count + " "+ k); 
//OP - 4 -1

// Step	     count	     k	               Condition checked
// Start	 0	         3	               —
// 1st loop	 count = 1	 k-- makes it 2	   3 > 0 → true
// 2nd loop	 count = 2	 k-- makes it 1	   2 > 0 → true
// 3rd loop	 count = 3	 k-- makes it 0	   1 > 0 → true
// 4th loop	 count = 4	 k-- makes it -1   0 > 0 → false

//In short: the loop runs one extra time because 
// do...while checks the condition after the body, not before.