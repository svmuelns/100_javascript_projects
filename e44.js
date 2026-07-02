/*
44. Write a function that uses default parameters 
(e.g., greet(name = "Guest")).
*/

function greet(name = 'guest'){
    console.log('Hola ' + name);
}

greet('Samu');
greet();
