/*## Switch Statement in JavaScript
The `switch` statement evaluates an expression once and then compares **it against multiple** `**case**` **values.** 

expression -> case 1, case 2, case 4.....  default....

- When a match is found, the code for that case runs. 
- It is cleaner than long if/else if chains when comparing a SINGLE value against many options. 
- Switch uses **strict comparison (===)**.


**Q:** What is the difference between `if(x == 5)` and `if(x === 5)` in testing?

Always use `**===**` (strict equality) in tests. `==` does type coercion: `"5" == 5` is true but `"5" === 5` is false. In QA, strict equality catches type bugs.



```
switch (expression) {
    case value1:
        // code block
        break;       // IMPORTANT: stops fall-through
    case value2:
        // code block
        break;
    default:
        // runs if no case matches (optional)
}
```
**Q:** What happens if you forget the `break` statement? 

**A:** The code "falls through" and executes ALL subsequent cases
until it hits a `break` or the switch ends. This is the #1 switch bug. 
Always include break unless fall-through is intentional 
(and add a `// fall-through` comment).



## Concepts covered
- `**switch (expr)**`  — evaluates `expr`  once, then matches against each `case` .
- `**case**`  **matching** — comparison is **strict (**`**===**` **)**, no type coercion.
- `**break**`  — exits the switch. Without it, execution **falls through** to the next case.
- `**default**`  — runs when no `case`  matches. Position doesn't matter, but conventionally last.
- **Grouped cases** — stacking `case`  labels with no body in between shares one block of code.
- `**switch (true)**`  — idiom for range/boolean checks (each `case`  becomes a condition).
- **Duplicate** `**case**`  **values** — legal syntactically; the **first** match wins, the rest are dead code.
- **Block scoping in cases** — `let`  / `const`  inside a `case`  need braces `{ }`  if reused across cases.



*/


let day = 2;
//Mon = 1 , TUE =2

switch(day)
{
    case 1: 
    console.log("Monday");
    break;

    case 2:
    console.log("Tuesday");
    let a = 10;
    let b = 20;
    console.log("Sum = " , a+b);
    break;

    case 3: 
    console.log("Wednesday");
    break;
    
    case 4: 
    console.log("Thurday");
    break;

    case 5: 
    console.log("Friday");
    break;

    case 6: 
    console.log("Saturday");
    break;

    case 7: 
    console.log("Sunday");
    break;

    default: 
    console.log("Not sure which day it is !!");
    break;

}
