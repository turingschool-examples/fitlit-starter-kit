class HydrationRepository {
  constructor(hydrationInformation) {
    this.hydrationInformation = hydrationInformation;
    this.user;
  }

  getUserById(userID) {
    this.user = this.hydrationInformation.filter(user => user.userID === userID);
    return this.user;
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}