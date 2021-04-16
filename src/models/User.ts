import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
    events = new Eventing();
    sync = new Sync<UserProps>(rootUrl);
    attributes: Attributes<UserProps>;

    constructor (attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs)
    }

    get on () {
        return this.events.on;
    }

    get trigger () {
        return this.events.trigger;
    }

    get get () {
        return this.attributes.get;
    }
}
