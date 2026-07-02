/*
Add "grape" to the end of the array, 
then remove the first element.
*/

const fruits = ["apple", "banana", "orange"];
console.log(fruits);

fruits.push("grape");
fruits.shift();

// pop(): Removes the last item and returns it.
// unshift(): Adds one or more items to the beginning of the array.

console.log(fruits);