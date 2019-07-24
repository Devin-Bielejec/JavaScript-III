/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window Binding - Using this helps refer people to the window, which is like the place where this belongs to. If "this" is not inside a function, "this" is the window [think globally] - "this" binds to the global, which in the case of a window is the window.

* 2. Implicit Binding - When "this" is used within an object "this" refers to the object name. Look to the left of the dot when the function is invoked to see what "this" is referring to

* 3. New Binding - When we create a new binding using bind, in which "this" transfers its owner to the new object specified.

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
        return (`${this.name} likes to eat`)
    }
}

console.log(devin.eat());


// Principle 3

// code example for New Binding
function superCoolPerson(feeling){
    this.name = "Devin";
    this.feeling = feeling;
}

const sadPerson = new superCoolPerson("sadness");
console.log(sadPerson.feeling);
// this.feeling refers to sadness

const hatefulPerson = new superCoolPerson("hateful");
console.log(hatefulPerson.feeling);
//but now this.feeling refers to hate because we rebound it!

// Principle 4

// code example for Explicit Binding