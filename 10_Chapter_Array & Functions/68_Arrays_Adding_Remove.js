let arr = [1,2,3];
console.log(arr); //[1,2,3]

console.log("------------------------------------------------------");

//ADD to END of an array
// push() method
arr.push(6);
console.log(arr); //[1,2,3,6]   
console.log("PUSH : It will add the item to the end of the array" , arr);

console.log("------------------------------------------------------");

//Remove from END of an array
// pop() method
arr.pop();
console.log(arr); //[1,2,3]
console.log("POP : It will remove the last item" , arr);

console.log("------------------------------------------------------");
console.log("Again add 4 and 5 to the end of the array");
arr.push(4,5);//added 4 and 5 to the end of the array
console.log(arr); //[1,2,3,4,5]

console.log("------------------------------------------------------");
//Add at BEGINNING of an array
// unshift() method
console.log("UNSHIFT : It will add the item at the beginning: ", arr); //[1,2,3,4,5]
arr.unshift(0);
console.log(arr); //[0,1,2,3,4,5]

console.log("------------------------------------------------------");
//Remove from BEGINNING of an array 
// shift() method
arr.shift();
console.log(arr); //[1,2,3,4,5]
console.log("SHIFT : It will remove the first item" , arr);

console.log("------------------------------------------------------");

console.log("Final array is: ", arr); //[1,2,3,4,5]

console.log("------------------------------------------------------");


//Splice method : 
// It can be used to add or remove items from an array at any position.
//It takes 3 parameters: start index, number of items to remove, 
// and items to add.  

console.log("Before splice: ", arr); //[1,2,3,4,5]
arr.splice(1,2); // 1- index, 2- number of items to remove
console.log(arr); //[1,4,5] //removed 2 items from index 1

console.log("Now add 99 after 2nd index item: ");
arr.splice(2,0,99); // 2- index, 0- number of items to remove, 99- item to add  
console.log(arr); //[1,4,99,5] //added 99 on 2nd index item 

console.log("------------------------------------------------------");

arr.splice(1,2,10,20);
console.log(arr); //[1,10,20,5] //removed 2 items from index 1 and added 10 and 20 on index 1
