/*
37. Create a Person constructor function (or class) 
with name and age, and a method introduce().
 */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    introduce() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
    }
}

const person1 = new Person("Samu", 25);
const person2 = new Person('Patri', 24);

console.log(person1.introduce());