/* 65. Write a recursive function factorial(n). 

A recursive function is a function that calls itself and reaches
a stop condition. To solve a smaller version of the same problem

Every recursive function needs 2 things:

1. The base case: safety exit condition: stop calling.

2. The recursive case: where the function does a small piece of work
and passes the remaining smaller piece back to itself. */

function factorial(n){
    // 1. The base case
    if (n <= 1) {
        return 1;
    }

    // 2. The recursive case
    return n * factorial(n - 1);
}

console.log(factorial(5));

/* 

factorial(5) returns 5 * factorial(4)
  factorial(4) returns 4 * factorial(3)
    factorial(3) returns 3 * factorial(2)
      factorial(2) returns 2 * factorial(1)
        factorial(1) hits the BASE CASE and returns 1 immediately!

        factorial(1) returns 1
      factorial(2) returns 2 * 1 = 2
    factorial(3) returns 3 * 2 = 6
  factorial(4) returns 4 * 6 = 24
factorial(5) returns 5 * 24 = 120         */