if(typeof module !== 'undefined') {
  userData = require('../data/users');
}

class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity; 
}