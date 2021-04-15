import { User } from './models/User';

const user = new User({ name: 'my name', age: 20 });

user.on('change', () => {
    console.log(`chane1`);
})
user.on('change', () => {]
    console.log(`chane2`);
})

user.on('save', () => {
    console.log(`save triggered`);
})

user.trigger('saasdfve')
