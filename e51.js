/* 51. Write a Promise that resolves after 1 
second with "Hello" and then .then() it. */

const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if(success){
        resolve("Hello");
    } else {
        reject("No");
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));


// ANOTHER SOLUTION


function wait(ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited ${ms} milliseconds`);
        }, ms);
    });
}

wait(1000)
    .then(message => {
        console.log(message);
    });

console.log('This log should be first');


// FIXED SOLUTION


const correctPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello');
    }, 1000)
});

correctPromise.then((message) => {
    console.log(message);
});

console.log('This runs first');