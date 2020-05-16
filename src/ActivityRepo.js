class ActivityRepo {
  constructor(activityRepoData) {
    this.activityRepoData = activityRepoData;
  }

  calculateAvgStairs(date) {
    let newDate = this.checkDate(date);
    if (date !== newDate) {
      return 'You must pass a valid date';
    } else {
      let dailyAllActivity = this.activityRepoData.filter(activity => activity.date === date);
      
      let avgStairs = dailyAllActivity.reduce((acc, activity) => {
        return acc += activity.flightsOfStairs / dailyAllActivity.length;
      }, 0)

      return Math.ceil(avgStairs);
    }
  }

  calculateAvgSteps(date) {
    let newDate = this.checkDate(date);
    if (date !== newDate) {
      return 'You must pass a valid date';
    } else {
      let dailyAllActivity = this.activityRepoData.filter(activity => activity.date === date);
      
      let avgSteps = dailyAllActivity.reduce((acc, activity) => {
        return acc += activity.numSteps / dailyAllActivity.length;
      }, 0)

      return Math.ceil(avgSteps);
    }
  }

  calculateAvgMinActive(date) {
    let newDate = this.checkDate(date);
    if (date !== newDate) {
      return 'You must pass a valid date';
    } else {
      let dailyAllActivity = this.activityRepoData.filter(activity => activity.date === date);
      
      let avgMinActive = dailyAllActivity.reduce((acc, activity) => {
        return acc += activity.minutesActive / dailyAllActivity.length;
      }, 0)

      return Math.ceil(avgMinActive);
    }
  }

  calculateMaxMinActive(date) {
    let newDate = this.checkDate(date);
    if (date !== newDate) {
      return 'You must pass a valid date';
    } else {
      let dailyAllActivity = this.activityRepoData.filter(activity => activity.date === date);

      let minActiveSort = dailyAllActivity.sort((a, b) => b.minutesActive - a.minutesActive);

      let mostActive = [];
      
      minActiveSort.forEach(activity => {
        if (activity.minutesActive === minActiveSort[0].minutesActive) {
          mostActive.push(activity);
        }
      })
      
      return mostActive;
    }
  }

  checkDate(date) {
    let isDate = new Date(date);
    let newIsDate = isDate.getFullYear() + "/" + 
      ("0" + (isDate.getMonth() + 1)).slice(-2) + "/" + 
      ("0" + isDate.getDate()).slice(-2);
    return newIsDate;
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}
