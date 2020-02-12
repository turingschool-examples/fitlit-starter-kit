class Sleep {
  constructor (sleepData, userID) {
    this.userID = userID;
    this.sleepData = sleepData.filter(function(obj) {
      return obj.userID === userID;
    });
  }

  avgHoursSlept() {
    let data = this.sleepData.reduce(function(acc, s) {
      acc.totalHoursSlept += s.hoursSlept;
      acc.totalNights += 1;
      return acc;
    }, {totalHoursSlept: 0, totalNights: 0});

    return (data.totalHoursSlept / data.totalNights).toFixed(2);
  }

  avgSleepQuality() {
    let data = this.sleepData.reduce(function(acc, s) {
      acc.totalSleepQuality += s.sleepQuality;
      acc.totalNights += 1;
      return acc;
    }, {totalSleepQuality: 0, totalNights: 0});

    return (data.totalSleepQuality / data.totalNights).toFixed(2);
  }

  hoursSlept(sleepDate) {
    let data = this.sleepData.filter(function(obj) {
      return obj.date === sleepDate;
    })
    return data[0].hoursSlept
  }

  hoursSleptWeekOf(weekStart) {
    weekStart = new Date(weekStart);
    // Inclusive date range so only add 6 to get a 7 day period
    let weekEnd = this.addDays(weekStart, 6);

    let data = this.sleepData.filter(function(obj) {
      var date = new Date(obj.date);
      return date >= weekStart && date <= weekEnd;
    });

    let hoursSlept = data.map(function(obj) {
      return obj.hoursSlept;
    });

    return hoursSlept;
  }

  qualitySleptWeekOf(weekStart) {
    weekStart = new Date(weekStart);
    // Inclusive date range so only add 6 to get a 7 day period
    let weekEnd = this.addDays(weekStart, 6);

    let data = this.sleepData.filter(function(obj) {
      var date = new Date(obj.date);
      return date >= weekStart && date <= weekEnd;
    });

    let qualitySlept = data.map(function(obj) {
      return obj.sleepQuality;
    });

    return qualitySlept;
  }

  addDays(date, daysToAdd) {
    var newDate = new Date(date.valueOf());
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
