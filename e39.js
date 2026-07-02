/*
39. Write a function that accepts another 
function as an argument (callback) and calls it.
*/

function prepareCoffe(name, callback) {
    console.log(`Coffe on the way, ${name}!`);
    callback();
}

function addAlmondMilk(){
    console.log('Pouring almond milk...');
}

prepareCoffe('Samu', addAlmondMilk);