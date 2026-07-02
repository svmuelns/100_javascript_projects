/*
32. Create an object calculator with methods
 add, subtract, multiply, divide.
*/

const calculator = {
    brand: 'Casio',
    
    add(a,b){
        return a + b;
    },
    substract(a, b){
        return a - b;
    },
    multiply(a, b){
        return a * b;
    },
    divide(a,b){
        return a/b;
    }
}
console.log(calculator.add(10,5));
console.log(calculator.substract(10,5));
console.log(calculator.multiply(10,5));
console.log(calculator.divide(10,5));