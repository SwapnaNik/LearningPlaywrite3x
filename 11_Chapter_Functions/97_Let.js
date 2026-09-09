var a = "Pramod";
// 10,000lines 
if(true){
    console.log(a); 
    var a = "temp";
}

// Temporal Dead Zone

// Global Scope
// a = "Pramod"
// Enter Block , Block Scope
//  a = TDZ (exist but not initialized)
// console.log(a);

let b = "Swapna";

if(true){
    console.log(b);// ReferenceError: Cannot access 'b' before initialization
   // let b = "temp";
}