class ActivityRepository {
  constructor(data) {
    this.data = data
    this.currentUser = []
  }

  findUserId(index) {
    this.data.forEach(user => {
      if(user.userID === index) {
        this.currentUser.push(user);
      }
    });
    return this.currentUser
  }

  avgStairsClimbedGivenDate(date) {
    let day = this.data.filter(user => {
      if (user.date === date) {
        return user
      }
    })
    let avg = day.reduce((acc, curVal) => {
      return acc += curVal.flightsOfStairs
    }, 0)
    return (avg / day.length)
  }

  numberofStepsGivenDate(date) {
    let day = this.data.filter(user => {
      if (user.date === date) {
        return user
      }
    })
    let avg = day.reduce((acc, curVal) => {
      return acc += curVal.numSteps
    }, 0)
    return (avg / day.length).toPrecision(4)
  }

  avgMinutesActiveGivenDate(date) {
    let day = this.data.filter(user => {
      if (user.date === date) {
        return user
      }
    })
    let avg = day.reduce((acc, curVal) => {
      return acc += curVal.minutesActive
    }, 0)
    return (avg / day.length).toPrecision(3)
  }
}

if (typeof module !== 'undefined'){
  module.exports = ActivityRepository;
}