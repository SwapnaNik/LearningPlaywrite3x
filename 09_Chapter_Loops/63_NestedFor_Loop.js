//Nested for loop
for(let i=1;i<=3;i++){    
    for(let j=1;j<=3;j++){  
        console.log(i,j);
    }
}   
//OP
//1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3


//Interview questions
console.log("2nd example");
let a =0;
while(a<5){
    a++;
}
console.log(a); //OP - 5

console.log("3rd example");
let b =10;
do{
console.log(b);
}while(b<5); // OP -10

console.log("4th example");
let count =0;
for(let i=5;i<5;i++){
count++;
}
console.log(count); //OP - 0