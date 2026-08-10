let browser = ["Chrome", "Firefox", "Webkit" , "Edge", "Safari"];
console.log(browser.length);  //5

browser.pop();
console.log(browser);  //["Chrome", "Firefox", "Webkit" , "Edge"]

let removed = browser.shift();
console.log(browser);
console.log(removed);  //Chrome

console.log("------------------------------------------------------");

for(i=0; i<browser.length; i++)// condition is i<browser.length because we want to loop through the entire array
    {
    console.log(browser[i]);//Firefox, Webkit, Edge
    if(browser[i] === "Webkit") {
        console.log("Webkit is found at index: ", i);
    }
}
