//Accessing and Modifying Array Elements

let statuses = ["Pass", "Fail", "Skip"];
console.log(statuses); // ["Pass", "Fail", "Skip"]

console.log(statuses[0]); //Pass
console.log(statuses[2]);  //Skip

console.log(statuses.at(-1)); //Skip
console.log(statuses.at(-4)); //undefined

//Modifying array elements
statuses[1] = "Blocked";
console.log(statuses); //["Pass", "Blocked", "Skip"]
