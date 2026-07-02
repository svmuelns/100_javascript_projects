/* 52. Use async/await to fetch data from 
a public API 
(e.g., jsonplaceholder.typicode.com/posts/1).*/

async function fetchPosts(id){
    try{        // wait for network
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        // HTTP STATUS CHECKING
        if (!response.ok) {   // response.ok es un método de fetch
            throw new Error(`HTTP error! status: ${response.status}`); // pero response.status es un método de await
        }
        const data = await response.json(); // wait for data parsing
        console.log('Data fetched with async and await: \n', data);
    
    } catch(error){
        console.error('Failed to fetch data:\n', error.message);
        throw error;
    }
}

fetchPosts(1);



/* async: Declares a function that always returns
 a Promise */

/* await: Pauses the execution of an async function 
until a Promise settles */


// BASIC WAY TO DO IT (NOT SAFE)
/*fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    .then(response => response.json())
    .then(json => console.log(json))
    */
