class User {
  constructor(filepathway) {
    this.filepathway = filepathway;
  }

  returnFirstName() {
    return this.filepathway.name.split(' ')[0];
  }
}

module.exports = User;
