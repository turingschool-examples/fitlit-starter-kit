class PhysicalRepo {
  constructor(dataFilePath) {
    this.dataFilePath = dataFilePath;
  }

  getDateIndex(date) {
    let allActivityData = this.dataFilePath.map(el => el.activityData);
    let dates = allActivityData[0].map(el => el.date);
    return dates.indexOf(date);
  }
  
  getAverageSteps(date) {
    let index = this.getDateIndex(date);
    let activityData = this.dataFilePath.map(el => el.activityData);
    let specificData = activityData.map(array => {
      let steps = array.map(el => el.numSteps);
      return steps[index];
    });
    let average = specificData.reduce((acc, curr) => {
      return acc + curr / specificData.length;
    });
    return Math.round(average);
  }

  averageStairsClimbed(date) {
    let index = this.getDateIndex(date);
    let activityData = this.dataFilePath.map(el => el.activityData);
    let specificData = activityData.map(array => {
      let stairs = array.map(el => el.flightsOfStairs);
      return stairs[index];
    });
    let average = specificData.reduce((acc, curr) => {
      return acc + curr / specificData.length;
    });
    return Math.round(average);
  }

  averageTimeActive(date) {
    let index = this.getDateIndex(date);
    let activityData = this.dataFilePath.map(el => el.activityData);
    let specificData = activityData.map(array => {
      let minutes = array.map(el => el.minutesActive);
      return minutes[index];
    });
    let average = specificData.reduce((acc, curr) => {
      return acc + curr / specificData.length;
    });
    return Math.round(average);
  }
}


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = PhysicalRepo;
}