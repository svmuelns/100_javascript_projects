/* 
5. Write an if/else statement that checks 
if a number is positive, negative, or zero.
*/

let num1 = -1;
let num2 = 0;
let num3 = 1;

export function organizer(a){
    if(a > 0){
        console.log("Es positivo");
    } else if(a == 0){
        console.log("Es 0");
    } else {
        console.log("Es negativo")
    }
}

organizer(num1);
organizer(num2);
organizer(num3);