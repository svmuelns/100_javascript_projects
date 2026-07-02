/*
60. Use map, filter, and reduce together: 
from [1,2,3,4,5], get sum of squares of evens. */

let array = [1,2,3,4,5];

const result = array
    .filter(num => num % 2 === 0) // evens
    .map(num => num * num) // squares
    .reduce((acc, curr) => acc + curr, 0); // sum everything else

console.log(result);