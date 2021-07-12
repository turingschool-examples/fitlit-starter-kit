import { userData } from "../src/data/users";


class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.address = user.address;
    this.email = user.email;
  }
}

export default User;
