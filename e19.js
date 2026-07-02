/*
19. Write a function that takes 
two numbers and returns the larger one.
 */

export function whoIsLarger(a, b){
    if (a > b) {
        return("A is larger");
    } else if (b > a){
        return("B is larger");
    } else {
        return("Whatever")
    }
}

console.log(whoIsLarger(5, 8));
console.log(whoIsLarger(9, 5));