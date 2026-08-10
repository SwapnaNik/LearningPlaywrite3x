//Example 1 :

let age = 27 ; // try age as 15 , 24 and see the output
console.log("Age is : " + age);

if (age > 18) {
    console.log("You can go to Goa");
    if (age > 25) {
        console.log("You can drink alcohol in Goa ");
    }
    else
    {
        console.log("You can not drink alcohol in Goa");
    }
}
else {
    console.log("You can not go to Goa");
}



//Example 2 :

let marks = 87;// try marks as 95 , 85 , 75 , 65 and see the output

console.log("Marks are : " + marks);

if (marks > 90) {
    console.log("You got A grade");
}
else if (marks > 80) {
    console.log("You got B grade");         
}
else if (marks > 70) {
    console.log("You got C grade");
}
else if (marks > 60) {
    console.log("You got D grade");
}
else {
    console.log("You got F grade");
}   
