const Hydration = ('../src/Hydration')
FilePath = require("../data/HydrationSub")

class HydrationRepository {
  constructor(data) {
    this.data = FilePath;
  }

  findId(id) {
      let correctUser = this.data.filter(function(user) {
        return user.userID === id;
      })
      return correctUser;
      let newUser = new Hydration(correctUser.userID);
  }
}

if (typeof module !== 'undefined') {
    module.exports = HydrationRepository;
  }