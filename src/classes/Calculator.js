class Calculator {
  constructor(id) {
    this.currentDataId = id;
  }

  getUserDayTotal(category, date, metric) {
    return category.find(day => day.date === date)[metric]
  }

  getUserWeekTotal(category, date, metric) {

  }

  getUserAllTimeAvg(category, metric) {
    return category.reduce((average, items) => {
      average += items[metric] / category.length;
      return Math.round(average * 100) / 100;
    }, 0)
  }
}

if (typeof module !== "undefined") {
  module.exports = Calculator;
}
