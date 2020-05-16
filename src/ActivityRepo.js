class ActivityRepo {
  constructor(activityRepoData) {
    this.activityRepoData = activityRepoData;
  }

  calculateAvgStairs(date) {
    let dailyAllActivity = this.activityRepoData.filter(activity => activity.date === date);
    
    let avgStairs = dailyAllActivity.reduce((acc, activity) => {
      return acc += activity.flightsOfStairs / dailyAllActivity.length;
    }, 0)

    return Math.ceil(avgStairs);
  }

  calculateAvgSteps(date) {
    let dailyAllActivity = this.activityRepoData.filter(activity => activity.date === date);
    
    let avgSteps = dailyAllActivity.reduce((acc, activity) => {
      return acc += activity.numSteps / dailyAllActivity.length;
    }, 0)

    return Math.ceil(avgSteps);
  }

  calculateAvgMinActive(date) {
    let dailyAllActivity = this.activityRepoData.filter(activity => activity.date === date);
    
    let avgMinActive = dailyAllActivity.reduce((acc, activity) => {
      return acc += activity.minutesActive / dailyAllActivity.length;
    }, 0)

    return Math.ceil(avgMinActive);
  }

  calculateMaxMinActive(date) {
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

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}
