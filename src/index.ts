import { User } from './models/User';

const user = new User({ name: "my name", age: 20 });

user.set({name:'new name'});

console.log(`user.name = ${user.get('name')}`);
console.log(`user.age = ${user.get('age')}`);
