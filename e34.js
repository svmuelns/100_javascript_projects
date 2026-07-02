/*
34. Write a function that takes an array 
and returns a new array with unique values
 (remove duplicates).
*/

let array = [2,3,5,3,5,1,4,6];
let arrayNuevo = [];
console.log("Array: " + array);

// Método 1
for (let i = 0; i < array.length; i++) {
    if (!arrayNuevo.includes(array[i])) {
        arrayNuevo.push(array[i]);
    }
}
console.log("Método 1: " + arrayNuevo);

// Método 2: Set
function getUnique(array){
    return [...new Set(array)]
}
console.log("Método 2: " + getUnique(array));