//coercion
/*let a = 7;
let b = '6';
b = parseInt(b, 10);
let c = a + b;
console.log('Answer: ' + c);

let d = parseInt('bob', 10);
let e = Number.isNaN(d);
console.log(d);
console.log(e);*/

//=====Types of expressions

//1. Variable Declaration
//let a;

//2. Assign a vlue
//a = 4;

//===== Perform an evaluation that returns a single value
// b + c;

// let b = 3;
// let c = 2;
// Three expressions in here ... can you find them?
// let a = b + c;

//1. let a ... variable devlaration
//2. perform an eval b + c
//3/ result assigned to a

//================================== Category of Operators

//-Assigment =

//-Arethmetic + - * / %
// let m = 10 % 3;
// console.log(m);

//-Increment / Decrement ++ --
// var a = 1;
// a++
// console.log(a++);
// console.log(++a);
// console.log(a);

//-String '' +

//-Precedence
// let b = (1 + 2) * 3;
// console.log(b);

//-Function invocation operators ()
//console.log('');

//-Logical and: && or: ||

//-Member accessor operator .
//console.log

//-Code block operators {}

//-Array element access operators []


//==================================
//ARRAYS

// let a = [4, 8, 15, 16, 23, 42];
// let b = [ 'david', 'eddie', 'alex', 'michael'];

// console.log(a[3]);
// console.log(a);
// a[0] = 7;
// console.log(a);

//object
// console.log(typeof a);

//let c = [4, 'alex', true];
//console.log(c);

//undefined
//console.log(b[4]);

//console.log(a.length); //actual number, not zero based

/*not good
a[10] = 77;
console.log(a);
console.log(a.length);*/

// a.push(77);
// console.log(a);
// console.log(a.length);

// a.pop();
// a.pop();
// a.pop();
// console.log(a);
// console.log(a.length);


//==================================
//FUNCTION-DECLARETION

/*
function sayHello () {
    console.log('------------------');
    console.log('hello!');
    console.log('------------------');
}
*/

//sayHello();
/*
let a = sayHello;
a()
a()
a()
*/
/*
function sayHello (name) {
    console.log('------------------');
    console.log('hello! ' + name + '!');
    console.log('------------------');
}

sayHello('bob');
sayHello('beth');
sayHello('Mr Tibble');
*/

// function calculateTax(amount) {
//     let result = amount * 0.0825;
//     return result;   
// }

// let tax = calculateTax(100);
// console.log(tax);


//==================================
//FUNCTION-EXPRESSION

/*
setTimeout(function () {
    console.log('I waited 2 seconds');
}, 2000);
*/

/*
let counter = 0;
function timeout() {
    setTimeout(function () {
        console.log('hi ' + counter++);
        timeout();
    }, 2000);
}

timeout()
//ctrl + c
*/

/*
(function () {
//(IIFE)
    console.log("Immediatley Invoked Function Expression");
})();
*/

//==================================
//DECISIONS

//If else

//Switch operator
/*
let hero = 'Batman';
switch (hero.toLowerCase()) {
    case 'superman':
        console.log('super strength');
        console.log('x-ray vision');
        break;
    case 'batman':
        console.log('intelligence');
        console.log('figth skills');
        break;
    default:
        console.log('member of JLA');    
}
*/

/*
//Ternary operator
//let a = 1, b = '1';
//let result = (a == b) ? 'equal' : 'inequal';
//let result = (a !== b) ? 'not equal' : 'equal';
//console.log(result);
//console.log((a === b) ? 'equal' : 'inequal');
*/

//==================================
//ITERATIONS
/*
for (let i = 0; i < 10; i++) {
    console.log(i);
}
*/
/*
let a = [4, 8, 15, 16, 23, 42];
for (let i = 0; i < a.length; i++){
    console.log(a[i]);
}
*/

/*
let a = [4, 8, 15, 16, 23, 42];
for (let b = 0; b < a.length; b++) {
    const c = a[b];
    console.log(c);
} */

/*
let x = 1;
while (x < 10) {
    console.log(x++);

    if (x == 7) break;

    /*
    if (x == 7) {
        break;
    }
    */
/*
}

while (x < 20) {
    console.log(x);
    x++
}
*/

//==================================
//SCOPE-BASICS
/*
let a = 'first';

function scopeTest() {
    console.log(a);
    a = 'changed'
    
    let b = 'second';
    if (a != '') {
        console.log(a);
        console.log('inside if: ' + b);
    }

    //let b = 'second';
    
} 


scopeTest()
//console.log(b);
//console.log(a);
*/

//==================================
//RETURNING-FUNCTION

//DON'T DO THIS
//var myVarible = 'I at the global scope';
//THIS EITHER
/*
var myFunction = function() {
    console.log('me too!');
}
*/

//function one() {
//    return 'one'
//}

//let value = one();
//console.log(value);
//console.log(one());
//console.log(typeof value);

//let value = one;
//console.log(value());

// string
// number
// boolean
// undefined
// function

/* 
function two() {
     return function () {
         console.log('two');
     }
 }

 let myFunction = two();
 myFunction()
 */

/*
function three() {
    return function() {
        return 'three';
    }
}

console.log(three()());
*/

//==================================
//OBJECT
//its object literal syntacs 
/*
let car = {
    make: 'bmw',
    model: 'M5',
    year: 2015,
    getPrice: function() {
        //perform some calc
        return 500;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    },
}
// . - it's a property access operator.
car.printDescription()
console.log(car.year);
//console.log(car['make']);
*/
/*
var anotherCar = {};
anotherCar.whatever = 'bob';
console.log(anotherCar.whatever);
*/

/*
var a = {
    myProperty: {b: 'hi'}
};
console.log(a.myProperty.b);
*/

/* OBJECT GRAPH
let c = {
    myProperty: [
        {d: 'this'},
        {e: 'can'},
        {f: 'get'},
        {g: "crazy"},
    ],
};
*/

/*
//GOOGLE JAVASCRIPT OBJECT LITERALS AND JAVASCRIPT OBJECT NOTATION (JSON) 
//JS has an builtin functions that will give you ability to work with JSON
// let carLot = [
//     { year: 2017, make: 'Toyota', model: '4Runer' },
//     { year: 2019, make: 'BMW', model: '528i' },
//     { year: 1982, make: 'Buick', model: 'Skylark' },
// ];

// let contacts = {
//     costumers: [
//         { firstName: 'Bob', lastName: 'Tabor', phoneNumber: [ '(123) 456-7890', '(123) 567-8901' ]},
//         { firstName: 'Richard', lastName: 'Boughton', phoneNumber: [ '(123) 555-7894', '(123) 555-8913' ]},
//     ],
//     employees: [
//         { firstName: 'Steve', lastName: 'Jaworski', phoneNumber: [ '(312) 456-7894', '(321) 567-8413' ]},
//         { firstName: 'Conrad', lastName: 'Tabor', phoneNumber: [ '(312) 456-7224' ]},
//         { firstName: 'Grant', lastName: 'Landon', phoneNumber: [ '(312) 456-7225' ]},
//     ],
// };
*/

//==================================
//MODULE-PATTERN !!!!!! Technick
/*
var counter = (function () {
    
    // privat stuff
    let count = 0;

    function print(message) {
        console.log(message + '---' + count);
    }

    // return an object
    return {
        //value: count, //It's created a clouser
        get: function() { return count;},

        set: function(value) { count = value; },

        increment: function() {
            count += 1;
            print('After invrement: ');
        },
        
        reset: function() {
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        }
    }
})();


//console.log(counter.count); //not posible

counter.increment()
counter.increment()
counter.increment()

//Accidentally created a closure
//console.log(counter.value);

counter.set(7);
console.log(counter.get());

counter.reset();
*/

//==================================
//Revealing-MODULE !!!!!! Technick

/* let counter = (function () {

    // privat stuff
    let count = 0;

    function print(message) {
        console.log(`${message} => ${count}`);
    }

    function getCount() {return count;}

    function setCount(value) {count = value;}

    function incrementCount() {
        count += 1;
        print('After increment: ');
    }

    function resetCount() {
        print('Before reset: ');
        count = 0;
        print('After reset: ');
    }

// 'reveals' the public functions
// clearer presentation
//however, you can (accidentaly) overwrite
//the property values :/

    return {
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount,
    };
})();


console.log(counter.increment());
console.log(counter.get()); */


//==================================
//THIS - keyword!

/* function first() {
    return this;
}

console.log(first() === global); */
//THIS is Node's global object
//because that's where the
//first method was called.

/* function second() {
    'use strict';

    return this;
}

console.log(second() === global);
console.log(second() === undefined); */

//----
/* //THIS - dependes on HOW a function is called.
//An object can be passed as the first argument to call
//or apply and THIS will be bound to it.
let myObject = { value: 'My Object'};

//THIS property is set on the global object
global.value = 'Global object';

function third(name) {
    //Returns something different depending on how
    //we call THIS method:
    return this.value + name;
}
 
//console.log(third());

//Both call and apply allow you to explicitly set
//what you want to represent THIS. The difference
//is in how additional arguments to the function
//are sent

//console.log(third.call(myObject));
console.log(third.call(myObject, ' bob'));
console.log(third.apply(myObject, [' bob'])); */

/* 
function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'bob',
    lastName: 'trabor',
    print: fifth,
}

let customer2 = {
    firstName: 'richard',
    lastName: 'boughton',
    print: fifth,
}

customer2.print();
customer1.print(); */

//==================================
//DESTRUCKTURING! - - - 
//---- Technic to unpacking values from arrays into an individual variables or into other arrray elements of the different array. To unpack proporties of an object into other distinct variables or a different objects.

//assining to individual variables el of an array
let a, b, c, d, e;

let names = [ 'david', 'eddie', 'alex', 'michael', 'sammy' ];

 /* [a, b, c, e, d] = names;

 console.log(a);
 console.log(b);
 console.log(c);
 console.log(d);
 console.log(e); */

 //we can pick elements one by one or we can group together in an array
 
/* let others;
[a, b, ...others] = names;
console.log(a);
console.log(b);
console.log(others); */

