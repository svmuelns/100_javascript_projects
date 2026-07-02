/*
24. Create an array of 5 numbers 
and use a for...of loop to print each
*/

let array = Array.from({ length: 5 }, (_, i) => i + 1);

for (const iterator of array) {
    console.log(array[iterator]);
}
