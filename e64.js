/* 64. Use Symbol as a unique object key. 

A Symbol unique object key refers to using a special, 
primitive data type called a Symbol as the property name (key) of 
an object, instead of using a traditional string. 

1. If you need to add custom data to their objets you don't break the code

2. When you create 2 symbols with the same description, they won't
be the same. */

const user = {
    name: 'Sam',
    email: 'sam@gmail.com'
};

const pluginA_id = Symbol('id');
user[pluginA_id] = "TRACKING-ABC-123";

const pluginB_id = Symbol('id');
user[pluginB_id] = "ANALYTICS-ABC-123";

console.log(user);