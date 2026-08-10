let tests = ["Login" , "Checkout" , "Search"];
for(let i=0; i<tests.length; i++)
{
    console.log(tests[i]);
}

console.log("------------------------------------------------------");

//for...of(Cleanest for values)
for(let test of tests)
{
    console.log(test);
}

console.log("------------------------------------------------------");

//for each (no return value)
tests.forEach((test,index) => {
    console.log(`${index}: ${test}`);
});
