let a = 10
console.log(a)
if (true){ 
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 20;
}

// OP- will give error because of TDZ (Temporal Dead Zone) 
// which is a behavior in JavaScript where variables declared 
// with let and const are not accessible before they are initialized. 
// In this case, the variable a is declared with let inside the if 
// block, so it is in the TDZ until it is initialized. Therefore, 
// trying to access it before initialization results in a ReferenceError. 