/* Use localStorage to save a user's name 
and retrieve it after page refresh. */

try {
    const storedUserData = localStorage.getItem('user');

    if (storedUserData === null) {
        localStorage.setItem('user', 'samuelito');
        console.log("User created")
    } else {
        console.log(storedUserData)
    }

} catch (error) {
    console.error('Something went wrong', error.message)
    throw error;
}

// SIMPLER VERSION

// Save user name
localStorage.setItem('user', 'samuelito');

// Retrieve after page refresh
const userName = localStorage.getItem('user');
console.log(userName); // "samuelito"