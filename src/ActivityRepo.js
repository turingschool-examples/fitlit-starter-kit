class ActivityRepo {
  constructor(activityData, userData) {
    this.activityData = activityData;
    this.userData = userData;
  }

  returnAverage(date, property) {
    let amountPerDay = this.activityData.filter(day => day.date === date);

    return Number((amountPerDay.reduce((total, day) => {
      total += day[property];
      return total;
    }, 0) / amountPerDay.length).toFixed(0));
  }

  returnMostActive() {
    let person = [...this.activityData].sort((a, b) => b.minutesActive - a.minutesActive)[0].userID;
    let minActive = [...this.activityData].sort((a, b) => b.minutesActive - a.minutesActive)[0].minutesActive;
    return [this.userData.find(user => user.id === person).name, minActive];
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}