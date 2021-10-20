class User {
  constructor(userInfo) {
    this.id = userInfo.id;
    this.name = userInfo.name;
    this.address = userInfo.address;
    this.email = userInfo.email;
    this.strideLength = userInfo.strideLength;
    this.dailyStepGoal = userInfo.dailyStepGoal;
    this.friends = userInfo.friends;
  }

  displayFirstName() {
    const firstName = this.name.split(' ');
    return firstName[0];
  }

  calculateAvgOunces(hydrationData) {
    const currentUser = hydrationData.filter(element => {return element.userID === this.id})
    const avg = (currentUser.reduce((avgOunces, userHyd) => {
      return avgOunces + userHyd.numOunces;
    }, 0)) / currentUser.length;
    return Number(avg.toFixed(2))
  }

  findOuncesByDate(hydrationData, date) {
    return hydrationData.find(entry => {
      return (entry.userID === this.id && entry.date === date);
    }).numOunces
  }

  findOuncesByWeek(hydrationData, date) {
    const userEntries = hydrationData.filter(entry => {
      return entry.userID === this.id
    });
    const firstEntry = userEntries.find(entry => {
      return entry.date === date;
    });
    const index = userEntries.indexOf(firstEntry);
    const ouncesPerDay = userEntries.slice(index, (index+7)).map( (entry) => {
      return entry.numOunces
    });
    return ouncesPerDay;
  }
}

module.exports = User;
