class dataRepository {
    constructor(userData) {
        this.userData = userData
        this.users = []
    }


}

if (typeof module !== 'undefined') {
    module.exports = dataRepository;
  }