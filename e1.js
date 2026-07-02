/* 
1. Declare a variable name and assign your name to it. 
Then log it to the console. */

export function declareVariable() {
    const constante = 3.14;
        // declares constant value
    let counter = 1;
        // declares values that can be changed
    var atrapada = 999999;
        //  declares a function-scoped value
        // it only works in the function, not outside
        // so it's better not to use it in modern code
        
    console.log({ constante, counter, atrapada});
    console.table({ constante, counter, atrapada});
    console.log("variables: ", constante, counter, atrapada);
    console.log(`Constante: ${constante} 
Counter: ${counter}
Atrapada: ${atrapada}`)
    console.log("\nconstante: " + constante + "\ncounter: " + counter + "\natrapada: " + atrapada);
}

declareVariable();
