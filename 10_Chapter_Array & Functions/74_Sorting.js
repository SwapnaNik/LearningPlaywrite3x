let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);
//  alphabetical by default 

let score = [4,3,2];
console.log(score.sort());

//Natural Sorting - Lexicographic / string sort 
let nums = [10,1,21,2];
nums.sort();
console.log("Natural sorting : ", nums);//Natural sorting:[ 1, 10, 2, 21 ]


//Proper Sorting, Asc , Desc
nums.sort((a,b) => a-b); //Asc 
console.log("Proper sorting ASC order  : ",nums);
//Proper sorting ASC order  :  [ 1, 2, 10, 21 ]


nums.sort((a,b) => b-a); // Desc
console.log("Proper sorting DESC order : ",nums);
//Proper sorting DESC order :  [ 21, 10, 2, 1 ]


//Reverse the element of an array : 
nums.reverse();
console.log(nums);//[ 1, 2, 10, 21 ]