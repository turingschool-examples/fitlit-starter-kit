class Calculator {
  constructor(id) {
    this.currentDataId = id;
  }

  getUserDayTotal(category, date, metric) {
    return category.find(
      day => day.date === date && day.userID === this.currentDataId
    )[metric];
  }

  getUserAllTimeAvg(category, metric, decimalPlacement = 100) {
    return category.reduce((average, items) => {
      average += items[metric] / category.length;
      return Math.round(average * decimalPlacement) / decimalPlacement;
    }, 0);
  }

  getUserAllTimeMax(category, metric) {
    const metricValues = category.map(date => {
      return date[metric];
    });

    return Math.max(...metricValues);
  }

  getAllUserAllTimeAvg(
    dataset,
    database,
    metric,
    date = null,
    decimalPlacement = 100
  ) {
    // Takes in a dataset string (e.g. 'sleepData', 'hydrationData', 'activityData'), database (i.e. it needs all the data, therefore the entire database is passed in), and a metric (e.g. 'hoursSlept') because it needs to search all users' data, not just the current user. If a date is passed in, will filter the database by date and average from that value.
    let dataToAverage = database[dataset];

    if (date) {
      dataToAverage = database[dataset].filter(datapoint => {
        return datapoint.date === date;
      });
    }

    return dataToAverage.reduce((average, datapoint) => {
      const avg = (average += datapoint[metric] / database[dataset].length);
      return Math.round(avg * decimalPlacement) / decimalPlacement;
    }, 0);
  }

  getUserWeekTotal(category, date, metric) {
    let beginWeekDay = this.modifyDate(this.stringToDate(date), -6);
    const endWeekDay = this.stringToDate(date);
    const week = [];
    const metricData = [];

    while (beginWeekDay <= endWeekDay) {
      week.push(beginWeekDay);
      beginWeekDay = this.modifyDate(beginWeekDay, 1);
    }

    week.forEach(day => {
      const currentDay = this.dateToString(day);
      metricData.push(this.getUserDayTotal(category, currentDay, metric));
    });

    const weekData = { dates: week, metrics: metricData };

    return weekData;
  }

  getTrend(category, metric, streakDays = 3) {
    let trends = [];
    let temp = [category[0]];

    for (let i = 0; i < category.length - 1; i++) {
      let isTrending = temp[temp.length - 1][metric] < category[i + 1][metric];

      if (isTrending) {
        temp.push(category[i + 1]);
      } else if (!isTrending && temp.length >= streakDays) {
        trends.push(temp);
        temp = [category[i + 1]];
      } else {
        temp = [category[i + 1]];
      }
    }

    const trendDates = trends.reduce((dates, currentTrend) => {
      let trendDates = currentTrend.map(trendDay => trendDay.date);
      dates.push(trendDates);
      return dates;
    }, []);

    return trendDates;
  }

  calculateTotal(data) {
    return data.metrics.reduce((a, b) => {
      a += b;
      return a;
    }, 0);
  }

  stepsToMiles(state, date, providedUserSteps = null, decimalPlacement = 100) {
    const MILE = 5280;
    let userSteps;

    if (providedUserSteps) {
      userSteps = providedUserSteps;
    } else {
      userSteps = this.getUserDayTotal(
        state.currentUserData.activityData,
        date,
        "numSteps"
      );
    }

    const userStrideLength = state.currentUser.strideLength;
    const userDistance = userSteps * userStrideLength;
    const userMiles =
      Math.round((userDistance / MILE) * decimalPlacement) / decimalPlacement;
    return userMiles;
  }

  stepGoalMet(state, date) {
    const stepGoal = state.currentUser.dailyStepGoal;
    const stepsOnDate = this.getUserDayTotal(
      state.currentUserData.activityData,
      date,
      "numSteps"
    );

    return stepsOnDate > stepGoal;
  }

  getDaysStepGoalMet(state) {
    return state.currentUserData.activityData
      .filter(day => {
        return this.stepGoalMet(state, day.date);
      })
      .map(dayGoalMet => {
        return dayGoalMet.date;
      });
  }

  stringToDate(string) {
    // This makes three variables corresponding to the array returned by string.split('/') using array destructuring and then instantiates and returns a new date object.
    const [year, month, day] = string.split("/");
    return new Date(year, month - 1, day);
  }

  dateToString(date) {
    // This method converts a date object to a string for use in getUserWeekTotal() method. That method requires a string date.
    const year = date.getFullYear();
    let month = `${date.getMonth() + 1}`;
    let day = `${date.getDate()}`;

    if (month.length < 2) {
      month = `0${month}`;
    }
    if (day.length < 2) {
      day = `0${day}`;
    }

    return [year, month, day].join("/");
  }

  modifyDate(date, days) {
    // This method creates a new date that is in the future or past based on number of days passed to its days parameter and returns the new date as a copy. Does not mutate the argument.
    const copy = new Date(Number(date));
    copy.setDate(date.getDate() + days);
    return copy;
  }

  getWeekDay(date) {
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ][date.getDay()];
  }
}

if (typeof module !== "undefined") {
  module.exports = Calculator;
}
