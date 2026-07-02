/*
30. Write a function that uses setTimeout 
to log "Done" after 2 seconds.
*/
export function logsito(a){
    console.log(a);
}
setTimeout(logsito, 2000, "Done");

setTimeout(() => {
    console.log("Hola Mundo");
}, 2000);