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

if (typeof module !== 'undefined') {
    module.exports = ActivityRepository;
}
