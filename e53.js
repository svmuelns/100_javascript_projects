/*
53. Handle promise rejection with .catch() 
and try/catch in async functions.
*/

    // 53.1 Handle a promise rejecttion with .catch()

// Create a promise that rejects (simulating error)
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Something went wrong!"));
    }, 1000);
});

// Handle rejection with .catch()

myPromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Caught with .catch():", error.message);
    })



    // 53.2 And try/catch in async function

async function handlePromise(){
    try{
        const result = await myPromise;
        console.log("Success: ", result);
    } catch(error) {
        console.log("Caught with try/catch", error.message);
    }
}

handlePromise();