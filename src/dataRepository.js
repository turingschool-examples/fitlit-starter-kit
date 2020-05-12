class dataRepository {
    constructor(userData) {
        this.userData = userData
    }
}

if (typeof module !== 'undefined') {
    module.exports = dataRepository;
  }