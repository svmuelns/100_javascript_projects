/*
35. Write a function that checks if a string
is a palindrome (e.g., "racecar").
*/

let palindrome = true;
let normal = "racecar";
let splittedNormal = normal.split('');
let reversed = normal.split('').reverse();

for (let i = 0; i < reversed.length; i++) {
    if (splittedNormal[i] != reversed[i]) {
        console.log("It's not a palindrome");
        console.log(splittedNormal[i] + " != " +reversed[i])
        palindrome = false;
        break;
    } else {
        console.log(splittedNormal[i] + " = " +reversed[i])
    }
}
if (palindrome === true) {
    console.log("It's a palindrome");
}

// MÉTODO MÁS SIMPLIFICADO

function isPalindrome(str){
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));