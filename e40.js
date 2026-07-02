/*
40. Use try...catch to handle an intentional error 
(like calling an undefined function).
*/

try {
    culo();
} catch (error) {
    console.log("An error occurred: " + error.message);
}

