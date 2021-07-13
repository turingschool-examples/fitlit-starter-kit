class SleepRepo {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  getSleepById(id) {
    return this.sleepData.filter(sleep => sleep.userID === id);
  }

  calculateAvgHoursSleptPerDay(id) {
    let userSleepData = this.getSleepById(id);
    let totalUserHours = userSleepData.reduce((sum, sleep) => {
      sum += sleep.hoursSlept;
      return sum;
    }, 0);
    let roundedHours = Math.round(totalUserHours / userSleepData.length);
    return roundedHours;
  }

calculateAvgSleepRatingPerDay(id) {
  let userSleepData = this.getSleepById(id);
  let totalUserRatings = userSleepData.reduce((sum, sleep) => {
    sum += sleep.sleepQuality;
    return sum;
  }, 0);
  let roundedRating = Math.round(totalUserRatings / userSleepData.length);
  console.log(roundedRating)
  return roundedRating;
}

}

export default SleepRepo;
