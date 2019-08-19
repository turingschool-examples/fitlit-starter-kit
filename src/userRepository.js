class UserRepository {
  constructor(dataObj) {
    this.users = dataObj;
  }

  determineUserData(id) {
    return this.users.find(element => {
      if(element.id === id) {
        return element;
      }
    });
  }

  calculateAverageStepGoals() {
    
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}