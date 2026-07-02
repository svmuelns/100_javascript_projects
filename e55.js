/* 55. Create a class Animal with speak() method, 
then a Dog subclass that overrides speak(). */

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' is speaking');
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} the ${this.breed} is barking`);
    }
}

const animal1 = new Animal('Moha');
const dog1 = new Dog('Bobby', 'Golden Retriever')

animal1.speak();
dog1.speak();