/*
18. Use console.table() to display
 an array of objects.
*/

const person1 = {
    name: 'Samuel',
    city: 'Madrid',
    age: 25
}
const person2 = {
    name: 'Maria',
    city: 'Londres',
    age: 30
}
const person3 = {
    name: 'Javier',
    city: 'Oslo',
    age: 45
}

let personas = [person1, person2, person3];

console.table(personas);