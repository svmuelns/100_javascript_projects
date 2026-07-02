/*
38. Use Object.keys(), Object.values(), 
and Object.entries() on an object.
*/

const nigga = {
    name: 'Lewis',
    age: 30,
    city: 'New York'
}

let keys = Object.keys(nigga);
let values = Object.values(nigga);
let entries = Object.entries(nigga);

console.log(keys);
console.log(values);
console.log(entries);