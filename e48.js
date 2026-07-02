/*
48. Use some() and every() to check conditions 
on an array.
*/

const numbers = [1,2,3,4,5];

function isSomeValid(numbers) {
    return numbers.some(num => num > 4);
}

console.log(isSomeValid(numbers));

function isEveryValid(numbers){
    return numbers.every(num => num > 0);
}

console.log(isEveryValid(numbers));