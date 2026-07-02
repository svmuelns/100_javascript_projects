/* 49. Write a function that sorts an 
array of numbers in ascending and descending order.
*/

let array = [2,5,4,7,8,1,6,9,3];

function sortAscending(array){
    return array.sort();
}
console.log(sortAscending(array));

function sortDescending(array){
    return array.sort().reverse();
}
console.log(sortDescending(array));