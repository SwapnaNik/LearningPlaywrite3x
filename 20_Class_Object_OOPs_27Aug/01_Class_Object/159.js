class Car{
    // constructor(){
    //  // Default Conscutor
    // }

    // Parameterized constructor
    constructor(assigned_name){
        this.name = assigned_name;
    }
}

let hyndai_i10 = new Car("i10");
console.log(hyndai_i10.name);

let hyndai_create = new Car("creta");
console.log(hyndai_create.name);



const a = new Car("i11");     // constructor runs → "i10"
const b = new Car("Nexon");

// class Bad { constructor(a) {} constructor(b) {} }

class Bike {}
new Bike();   // Bike {}  — works fine, just has nothing in it



/*
I have written this code for practice which shows below error

********Wrong code
class car
{
    constructor(assigned_name)
    {
        this.name = assigned_name;
    }
}

let car1 = new car1("i10");
let car2 = new car2("Creata");

console.log("Car 1 is : " , this.car1);
console.log("Car 2 is : " , this.car2);


**********Error explaination:
I’ll point out each error and show the corrected class and object creation code.

There are three errors:

1. `new car1` is wrong. `car1` is a variable, not a class. Use `new car(...)`.
2. `new car2` is also wrong. Use the same `car` class.
3. In `console.log`, use `car1.name`, not `this.car1`.

```js

**********corrected code : 

class Car {
    constructor(assignedName) {
        this.name = assignedName;
    }
}

let car1 = new Car("i10");
let car2 = new Car("Creta");

console.log("Car 1 is:", car1.name);
console.log("Car 2 is:", car2.name);
```

Output:

```text
Car 1 is: i10
Car 2 is: Creta
```

`this` is used inside the class to refer to the current object. Outside the class, directly use `car1` or `car2`.
*/