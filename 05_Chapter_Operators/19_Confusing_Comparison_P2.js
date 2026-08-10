// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)


console.log("Confusing Comparison Operators in JS:" );

// null is something but not 0 , that is intentionally empty or has no value, while undefined means a variable has been declared but has not yet been assigned a value.
console.log(null == undefined); // true - null and undefined are considered equal in loose equality
console.log(null === undefined); // false - null and undefined are not equal in strict equality 


// ---------- 2. null and undefined ----------
console.log(null == undefined);   // true   → special rule in ==
console.log(null === undefined);  // false  → different types
console.log(null == 0);           // false  → null only == undefined/null
console.log(null >= 0);           // true   → >= coerces null to 0  (gotcha!)
console.log(null > 0);            // false
console.log(null == 0 || null > 0); // false … but null >= 0 is true 🤯