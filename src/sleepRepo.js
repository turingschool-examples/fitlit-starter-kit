class SleepRepo {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

    averageSleepQuality() {
      let averageAllSleep = this.sleepData.reduce((acc, users) => {
      acc += users.sleepQuality;
      return acc
      }, 0)
      return Math.round(averageAllSleep / this.sleepData.length);
    }

    // usersWithSleepQualityOver3(weekStart) {
    //   weekStart = new Date(weekStart)
    //   let weekEnd = this.addDays(weekStart, 6);
    //
    //   let data = this.sleepData.filter(function(obj) {
    //     var date = new Date(obj.date);
    //     return date >= weekStart && date <= weekEnd;
    //   });
    //
    //   let goodSleepGreaterThan3 = this.sleepData.filter(users => {
    //     let userAverage = this.sleepData.reduce((acc, sleepAV) => {
    //        acc += sleepAV.sleepQuality;
    //       return acc
    //     }, 0)
    //
    //     return users.sleepQuality >= 3.0;
    //   })
    //   console.log(goodSleepGreaterThan3)
    //   return goodSleepGreaterThan3;
    // }


    usersWithMostSleep(weekStart) {
      weekStart = new Date(weekStart)
      let weekEnd = this.addDays(weekStart, 6);

      let data = this.sleepData.filter(function(obj) {
        var date = new Date(obj.date);
        return date >= weekStart && date <= weekEnd;
      });

      var userWIthMostSleep = this.sleepData.sort((a, b) => {
        return b.hoursSlept - a.hoursSlept;
      })
      return userWIthMostSleep.shift();
    }

    usersWithHigestSleepQuality(weekStart) {
      weekStart = new Date(weekStart)
      let weekEnd = this.addDays(weekStart, 6);

      let data = this.sleepData.filter(function(obj) {
        var date = new Date(obj.date);
        return date >= weekStart && date <= weekEnd;
      });

      var userWIthHigestSleepQuality = this.sleepData.sort((a, b) => {
        return b.sleepQuality - a.sleepQuality;
      })
      return userWIthHigestSleepQuality .shift();
    }

    addDays(date, daysToAdd) {
      var newDate = new Date(date.valueOf());
      newDate.setDate(newDate.getDate() + daysToAdd);
      return newDate;
    }
}







if(typeof module !== 'undefined') {
  module.exports = SleepRepo;
};
