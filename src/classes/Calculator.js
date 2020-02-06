class Calculator {
  constructor(id) {
    this.currentDataId = id;
  }

  getUserDayTotal(category, date, metric) {
    return category.find(day => day.date === date)[metric];
  }

  getUserAllTimeAvg(category, metric) {
    return category.reduce((average, items) => {
      average += items[metric] / category.length;
      return Math.round(average * 100) / 100;
    }, 0);
  }

  getUserWeekTotal(category, date, metric) {
    let beginWeekDay = this.modifyDays(this.stringToDate(date), -6);
    const endWeekDay = this.stringToDate(date);
    const week = [];
    const metricData = [];

    while (beginWeekDay <= endWeekDay) {
      week.push(beginWeekDay);
      beginWeekDay = this.modifyDays(beginWeekDay, 1);
    }

    week.forEach(day => {
      const currentDay = this.formatDate(day);
      metricData.push(this.getUserDayTotal(category, currentDay, metric));
    });

    return { dates: week, metrics: metricData };
  }

  stringToDate(string) {
    // This makes three variables corresponding to the array returned by string.split('/') using array destructuring.
    const [year, month, day] = string.split("/");
    return new Date(year, month - 1, day);
  }

  formatDate(date) {
    // this method converts a date object to a string for use in getUserWeekTotal() method. That method requires a string date.
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

  modifyDays(date, days) {
    // this method creates a new date that is in the future or past based on number of days passed to its days parameter
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
