/*
15. Concatenate two strings "Java" and "Script" 
using + and using template literals.
*/
let a = "Java";
let b = "Script";

let formatUser = (name) => name.toUpperCase();

console.log(a + b);
console.log(`${a} ${b}`);
console.log(`Esto es ${formatUser(a)}`);
