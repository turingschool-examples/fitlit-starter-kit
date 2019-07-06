const User = require('../src/user');

class ActivityRepository {
  constructor(data, id) {
    this.data = data;
    this.id = id;
  }

  getUserData(id) {
    return this.data.filter(el =>
      el.id === id)
  }

}


// For all users, what is the average number of:
//     stairs climbed
// for a specified date
// steps taken
// for a specific date
// minutes active
// for a specific date
if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
