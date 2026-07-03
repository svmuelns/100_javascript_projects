/*
62. Implement a memoization function that caches
 results of expensive computations. 

MEMOIZATION - MEMOIZE

Is a technique for speeding up 
applications by caching the results of expensive 
function calls and returning them when the same 
inputs are used again.

1. Create memoize function */

function memoize(fn) {
    const cache = new Map(); // Map is perfect for key value caching

    return function (...args){
        // unique string in cache
        const key = JSON.stringify(args);

        // if the key exists in cache, bypass calculation and return it
        if (cache.has(key)) {
            console.log('Searching from cache for args: ', args);
            return cache.get(key);
        }

        // or compute the result, save it to cache, and return it
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
        
    }
}

// 2. Define an expensive recursive function

const slowFibonacci = (n) => {
    if (n <= 1) return n;
    return slowFibonacci(n-1) + slowFibonacci(n-2);
};

// 3. Wrap it with the memoize utility

const fastFibonacci = memoize((n) => {
    if (n <= 1) return n;
    return fastFibonacci(n-1) + fastFibonacci(n-2);
});

// TESTING

console.time('Slow Fibonacci');
slowFibonacci(40);
console.timeEnd('Slow Fibonacci');

console.time('Fast Fibonacci (1st run)');
fastFibonacci(40);
console.timeEnd('Fast Fibonacci (1st run)');

console.time('Fast Fibonacci (2nd run)');
fastFibonacci(40);
console.timeEnd('Fast Fibonacci (2nd run)');