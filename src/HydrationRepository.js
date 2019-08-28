class HydrationRepository { 
  constructor(data) {
    this.data = data
  }
  getUserData(id) {
    return this.data.filter(user => {
      if (user.userID === id) {
        return user;
      }
    })
  }
  getWeeklyAvgAllUsers() {
    const total = this.data.reduce((acc, user) => acc += user.numOunces, 0)
    return Math.round(total / this.data.length)
  }
}




if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}