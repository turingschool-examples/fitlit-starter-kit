'use strict'
class User {
  constructor(name) {
    this.name = name;
  }

  getFirstName() {
    return this.name.split(' ')[0]
  }

}
if (typeof module !== 'undefined') {
  module.exports = User;
}