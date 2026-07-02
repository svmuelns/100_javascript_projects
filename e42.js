/*
42. Use the spread operator ... to copy an array 
and merge two objects.
*/
const original = [1,2,3];
const copy = [...original]; // this is a copy
const wrong = original; // this is referencing

console.log(copy);

const obj1 = {
    name: 'Samuel',
    lastname: 'Nuñez'
}
const obj2 = {
    city: 'Singapur',
    age: 25
}

const merged = { ...obj1, ...obj2 };
console.log(merged);