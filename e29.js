/*
29. Use reduce() to sum all numbers in [5, 10, 15].
*/

let a = [5, 10, 15];

const total = a.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
);

console.log(total);

