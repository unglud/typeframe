import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
import { UserList } from "./views/UserList";

const users = new Collection<User, UserProps>(
  "http://localhost:3000/users",
  User.buildUser
);

users.on("change", () => {
  const root = document.getElementById("root");

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
