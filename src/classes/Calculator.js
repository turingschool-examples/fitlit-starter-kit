class Calculator {
  constructor(id) {
    this.currentDataId = id;
  }

  getUserDayTotal(category, date, metric) {
    return category.find(day => day.date === date)[metric]
  }

  getUserWeekTotal(category, date, metric) {

  }

  getUserAllTimeTotal(category, date, metric) {

  }
}

if (typeof module !== "undefined") {
  module.exports = Calculator;
}
