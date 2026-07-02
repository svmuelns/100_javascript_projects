/*
41. Create a closure: a function counter() 
that returns another function that increments 
a private variable.
*/

function createCount(){
    let count = 0; // This variable is closed

    return function increment(){
        count++;
        return count; // This func has access
    };
}

const counter = createCount();
console.log(counter());
console.log(counter());
console.log(counter());
