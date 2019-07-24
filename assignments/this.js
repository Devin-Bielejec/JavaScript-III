/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window Binding - Using this helps refer people to the window, which is like the place where this belongs to. If "this" is not inside a function, "this" is the window [think globally] - "this" binds to the global, which in the case of a window is the window.

* 2. Implicit Binding - When "this" is used within an object "this" refers to the object name. Look to the left of the dot when the function is invoked to see what "this" is referring to


* 3. New Binding - When 
* 4. Explicit Binding -
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding - If we were in a window
const a = 42;
console.log(global.a);

// Principle 2

// code example for Implicit Binding
const devin = {
    name: "Devin",
    eat: function(){
        console.log(`${this.name} likes to eat`);
    }
};

devin.eat();


// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding