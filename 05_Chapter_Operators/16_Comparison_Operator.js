/*comparison operators are = , == , === , != , !== , > , < , 
>= , <= .
comparison operator always returns a boolean value (true or false)
based on the comparison between two values

= - assignment operator, assigns a value to a variable
== - loose comparison operator, compares two values for equality, 
performs type coercion if necessary 
=== - strict equality operator, compares two values for equality,
without performing type coercion
!= - loose inequality operator, compares two values for inequality
!== - strict inequality operator, compares two values for inequality,
without performing type coercion
> - greater than operator
< - less than operator
>= - greater than or equal to operator
<= - less than or equal to operator */


examples :

console.log(3>4); // false
console.log(3<4); // true
console.log(4 >=4); // true
console.log(4<=3); // false

console.log(5=='5'); // true - loose couple comparison , either checks value or data type 

console.log(5 ==='5'); // false - strict comparison , check both value and data type

console.log(3 == 4); // false
console.log(4 == 4); // true
console.log(4 == "4"); // true - loose comparison , either checks value or data type
console.log(3 == "4"); // false - loose comparison , either checks value or data type

console.log(5 =="5"); // true - loose comparison , either checks value or data type
console.log(5 ==="5"); // false - strict comparison , check both value and data type
console.log(5 != "5"); // false - loose comparison , either checks value or data type
console.log(5 !== "5"); // true - strict comparison , check both value and data type