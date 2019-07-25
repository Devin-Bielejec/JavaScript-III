/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window Binding - Using "this" helps refer people to the window, which is the environment where "this" belongs to initially. If "this" is not inside of anything, "this" is the window [think globally] - "this" binds to the global, which in the case of a window is the window.

* 2. Implicit Binding - When "this" is used within an object "this" refers to the object name and properties. Look to the left of the dot when the function is invoked to see what "this" is referring to.

* 3. New Binding - By using the keyword "new" we can create an new instance of an object but with potentially different arguments, thus creating visually new properties. It will appear that "this" has changed.

* 4. Explicit Binding - When you use apply or call to switch where "this" belongs. On every function there is an option to use call/apply, which allows us to take data from an obj and then within our function we can refer to that data by using this
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding - If we were in a window
a = 42;
console.log(global.a); //or console.log(window.a);

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
//but now this.feeling refers to hateful because we rebound it!




// Principle 4

// code example for Explicit Binding
const newAttributes = {
    feeling: "excitement"
}

const oldAttributes = {
    feeling: "despair"
}

//On every function there is an option to use call/apply, which allows us to take data from an obj and then within our function we can refer to that data by using this
function showMe (){
    console.log(`Hello ${this.feeling} is very awesome!`);
}

showMe.call(newAttributes);
showMe.call(oldAttributes);
