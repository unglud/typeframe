import { User } from './models/User';

const user = new User({ name: 'my name', age: 20 });

user.on('change', () => {
})
user.on('change', () => {
})

user.on('bla', () => {
})

console.log(`user`, user);
