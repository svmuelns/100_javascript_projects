/*
14. Write a function isEven(num) that returns 
true if even, false otherwise.
*/

export function isEven(num){
    let even = num % 2;

    if (even == 0) {
        return true;
    } else {
        return false;
    }
}
console.log("Is it even?: " + isEven(4));
console.log("Is it even?: " + isEven(3));
