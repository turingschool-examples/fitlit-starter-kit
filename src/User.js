class User {
  constructor() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}

// A User represents a single user
// It should have a parameter to take in a userData object
// Each user holds on to the user properties from the data file
// Should have a method to:
// Return a user’s first name only