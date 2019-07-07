if (typeof module !== "undefined") {
const Hydration = ('../src/Hydration')
FilePath = require("../data/HydrationSub")
} else {
  FilePath = hydrationData;
}

class HydrationRepository {
  constructor (userID) {
    this.userID = userID,
    this.data = FilePath;
  }

  findId() {
      let correctUser = this.data.filter(user => {
        return user.userID === this.userID;
      })
      return correctUser;
      let newUser = new Hydration(correctUser.userID);
  }
}

if (typeof module !== 'undefined') {
    module.exports = HydrationRepository;
  }