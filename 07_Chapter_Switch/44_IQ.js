let fruit = "Banana";

switch(fruit)
{
    case "Apple":
        console.log("Apple Selected");
    case "Banana":
        console.log("Banana Selected");
    case "Cherry":
        console.log("Cherry Selected");
    case "Date":
        console.log("Date Selected");
    default:
        console.log("Default reached!!")
}
//op - as break not there it will print all after case match
/*Banana Selected
Cherry Selected
Date Selected
Default reached!!
*/
