/* 54. Implement a simple fetch() request and 
display the response in the console. */

// One way to do it more compact
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(response) {return response.json(); })
    .then(function(json) {console.log(json)});

// another way to do it
let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
let data = await response.json();
console.log(data);

// Better way to do it, more secure, error handling

async function handleFetch(url){
    
    try{
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error, status: ${response.status}`)
        }
        const data = await response.json();
        console.log('Response successful: \n', data);

    } catch(error){
        console.log('Error: ', error.message)
        throw error;
    }
}

handleFetch('https://jsonplaceholder.typicode.com/posts/1');