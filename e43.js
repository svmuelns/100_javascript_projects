/*
43. Use destructuring to get first and second from [10, 20, 30], 
and name from {name: "John", age: 30}.
*/

let array1 = [10, 20, 30];
let [a, b] = array1;

console.log(a, b);

let obj1 = {
    name: "John",
    age: 30
}

let { name } = obj1;

console.log(name);

