const User = require('../src/user');

class ActivityRepository {
    constructor(data, id) {
        this.data = data;
        this.id = id;
    }

   getUserData() {
       return this.data.filter(el =>
           el.userID === this.id)
   }
}

if (typeof module !== 'undefined') {
    module.exports = ActivityRepository;
}
