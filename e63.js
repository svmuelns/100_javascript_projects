/*
63. Use Proxy to create an object that logs every time a property 
is accessed. 

WHAT IS PROXY

A Proxy is like putting a protective glass box around your object 
with a security guard standing at the door.

    - Instead of talking to the object directly, 
    people have to talk to the Proxy.

    - Whenever someone tries to read a property, change a property, 
    or delete something, the security guard steps in.

    - The guard can log what is happening, change the data, 
    or even block the request completely.
*/

// 1. We create the object we want to protect (Target)

const user = {
    name: 'Alice',
    age: 25
};

// 2. Create the rules (Handler) with a get trap

const loggingHandler = {
    // This 'get' function runs automatically whenever a property is read
    get(target, property){
        console.log('Log: someone looked up the property:', property);

        // We must return the actual value, otherwise they get 'undefined'
        return target[property];
    },

    // Set trap (writing)
    set(target, property, value){
        console.log(`Writing: ${property} = ${value}`);
        target[property] = value;
        return true; // Must return true to indicate success
    },

    // Delete trap
    delete(target, property){
        console.log('Deleting: ', property);
        delete target[property];
        return true;
    }
}

// 3. Create the proxy (putting it all together)

const monitoredUser = new Proxy(user, loggingHandler);

// TESTING

console.log(monitoredUser.name);
console.log(monitoredUser.age);
monitoredUser.age = 50;