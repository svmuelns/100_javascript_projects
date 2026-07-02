/*
59. Write a function that debounces another 
function (limit how often it runs). 


DEBOUNCING 

Is a technique that delays the execution of a function
until after a X amount of time has passed since the 
last time it was called.

*/

function debounce (func, delay){
    let timer; // stores the timer ID

    return function(...args){
        // Clear previous timer (if any)

        clearTimeout(timer);

        // Set a new timer
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay)
    }
}

const logMessage = debounce(() => console.log('Debounced!', 1000));
logMessage();
logMessage();
logMessage();

// It will be printed only once because of the timer