/* 
60. Write a function that throttles another function 
(max once per time interval). 

THROTTLE

The main difference is: 

Debounce runs after the activity stops (search input)
Throttle runs at regular intervals (scrolling)

*/
// Throttle utility
function throttle(func, limit){
    let inThrottle = false; // is the function currently on cooldown?

    return function(... args) {
        if (!inThrottle){         
            func.apply(this, args)  // run the function
            inThrottle = true;
            
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    }
}

// Custom log function
function logMessage(text, count){
    console.log(`Text: ${text} trigger: ${count}`);
}

// Create throttled version
const throttledLog = throttle(logMessage, 1000);

// Simulate a high-frecuency loop (runs every 100ms)
let counter = 0;
const intervalId = setInterval(() => {
    counter++;

    throttledLog("Event running", counter);
    
    if (counter >= 50) {
        clearInterval(intervalId);
        console.log("Simulation finished")
    }
}, 100);