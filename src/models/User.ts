import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
    events = new Eventing();
    sync = new Sync<UserProps>(rootUrl);


}
