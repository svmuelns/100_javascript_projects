/*
31. Use setInterval to log the current time 
every second, then clear it after 5 seconds.
*/
let count = 0;

const counterId = setInterval(() => {
    count ++;
    let now = new Date();
    console.log(`Hora: ${now.toLocaleTimeString()}`);

    if (count === 5) {
        clearInterval(counterId);
        console.log("Stop procedure");
    }
}, 1000);