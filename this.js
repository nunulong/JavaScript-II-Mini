/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. when using function keyword to declear the function, inside this function if we call this, that would be return the whole Window object in browser
* 2. inside the object if we call this which will refer to the object itself
* 3. when using constructor function to build a object, this will be binding to object when he new keyword is used to create a new object where this refers to object itself
* 4. when using call or apply function to a object, this will refer to the object that is filled in as argument inside the call or apply
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function printGlobal() {
    console.log(this);
}
// Principle 2

// code example for Implicit Binding

const obj = {
    name: "Ting",
    greeting: function () {
        console.log(`Hello ${this.name}!`);
    },
};

obj.greeting();

// Principle 3

// code example for New Binding

function Person(options) {
    this.name = options.name;
}

Person.prototype.sayHello = function() {
    console.log(`Hello ${this.name}!`);
};

const me = new Person({name: "Ting"});
me.sayHello();
// Principle 4

// code example for Explicit Binding

function Person(options) {
    this.name = options.name;
    this.sayHello = function() {
        console.log(`Hello ${this.name}!`);
    };
}

const newman = new Person({name: "Newman"});
const jerry = new Person({name: "Jerry"});
newman.sayHello.call(jerry);
