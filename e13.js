/*
Use a ternary operator to check if a user is 
age >= 18 and return "Adult" or "Minor".*/

/* a ternary operator is a shorthand way o writing
an if-else statement in js in a single line of code */

const age = Array.from({ length: 20 }, (_, i) => i + 1);

for (let i = 0; i < age.length; i++) {

    const canVote = age[i] >= 18 ? true : false;

    console.log(canVote ? "Puede votar" : "No puede votar");
}
