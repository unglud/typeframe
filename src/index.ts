import { UserForm } from "./views/UserForm";
import { User } from "./models/User";
import { UserEdit } from './views/UserEdit';

const userForm = new UserEdit(
  document.getElementById("root")!,
  User.buildUser({ name: "NAME", age:20 })
);

userForm.render();
console.log(`userForm`, userForm);
