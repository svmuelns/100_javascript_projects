/*
12. Write a switch statement that logs the 
season based on a month number (1-12). */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let i = 1; i < array.length + 1; i++) {
    switch (i) {
        case 12:
        case 1:
        case 2:
            console.log("Invierno")
            break;
        case 3:
        case 4:
        case 5:
            console.log("Primavera")
            break;
        case 6:
        case 7:
        case 8:
            console.log("Verano")
            break;
        case 9:
        case 10:
        case 11:
            console.log("Otoño")
            break;
    }   
}