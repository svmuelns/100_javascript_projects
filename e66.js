/* 66. Write a recursive function fibonacci(n).*/
let arr = [0, 1];

function fibonacci(n) { // we start at 1 always
    if (arr.length > 20) {
        return null;
    }
    let result = arr[n - 1] + arr[n];
    arr.push(result);
    console.log(result);

    return fibonacci(n + 1);

}

console.log(fibonacci(1));
console.log(arr);


function fibo(n) {
    // base case
    if (n <= 1) {
        return n;
    }

    // recursive case
    return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(0));
console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(5));

// MEMOIZATION

function fibomemo(n, memo = {}) {
    // we check if we've calculated this previously
    if (n in memo) {
        return memo[n];
    }

    // base case
    if (n <= 1) {
        return n;
    }

    // calculate, store and return
    memo[n] = fibomemo(n - 1, memo) + fibomemo(n-2, memo);
    return memo[n];
}

console.log(fibomemo(40));