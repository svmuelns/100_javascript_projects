/* 
46. Write a function that flattens a 2D array
[[1,2],[3,4]] into [1,2,3,4].
*/

let original = [[1,2], [3,4]];
let [a, b] = original;
let [c, d] = a;
let [e, f] = b;
let result = [c, d, e, f];
console.log(result);

// REAL EASIER AND MORE PRACTICAL SOLUTION

function flatten2D(array){
    return array.flat();
}
console.log('\n2nd method: ')
console.log(flatten2D([[1,2], [3,4]]));
console.log(flatten2D([[1,2,3], [4,5,6]]));

// WITH CONCAT AND SPREAD

console.log('\n3rd method: ')
function flat2D(array){
    return [].concat(...array);
}
console.log(flatten2D([[1,2],[3,4]])); 

// CONCLUSION

/* The spread operator doesn't only work for 
copy an array but also 'spreading' the values 
from an array */
