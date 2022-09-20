class Activity {
  constructor(currentUser, activityData) {
    this.currentUser = currentUser;
    this.usersActivity = activityData.filter(data => data.userID === currentUser.id);
    this.activityData = activityData;
  };

  getDailyActivityByDate(type, date) {
    const value = this.usersActivity.find(data => data.date === date);

    if (value) {
      return value[type];
    } else {
      return 'This date could not be found.';
    };

  };

  getDailyMilesByDate(date) {
    const totalMiles = this.usersActivity.reduce((total, data) => {
      const mileInFeet = 5280;
      if (data.date === date) {
        total = this.currentUser.strideLength * data.numSteps / mileInFeet
      };
      
      return total
    }, 0);
    
    if (totalMiles) {
      return parseFloat(totalMiles.toFixed(1));
    } else {
      return 'This date could not be found.';
    };
  };

  getWeeklyActivity(date) {
    const start = this.usersActivity.findIndex((data) => data.date === date);
    const weeklyData = this.usersActivity
      .slice(start, start + 7)
      .map((day) => {
        return {
          'date': day.date,
          'numSteps': day.numSteps,
          'minutesActive': day.minutesActive,
          'flightsOfStars': day.flightsOfStairs
          
        };
      })
      .filter((day) => {
        const getEachDate = day.date.split('/');
        const chosenDate = date.split('/');

        if (
          getEachDate[0] === chosenDate[0] &&
          getEachDate[1] === chosenDate[1]
        ) {
          
          return day;
        }
      });

      return weeklyData;
  };

  getAvgMinutesActivePerWeek(date) {
    const start = this.usersActivity.findIndex(data => data.date === date);
    const weeklyData = this.usersActivity.slice(start, start + 7);
    
    const totalMinutes = weeklyData.reduce((sum, data) => {
     
      return sum += data.minutesActive;
    }, 0);
    
    return Math.round(totalMinutes / weeklyData.length);
  };
  
  getStepGoalByDay(date) {
    const lessMessage = this.usersActivity
      .find(data => data.date === date && this.currentUser.dailyStepGoal > data.numSteps);
    const equalMessage = this.usersActivity
      .find(data => data.date === date && this.currentUser.dailyStepGoal === data.numSteps);
    const moreMessage = this.usersActivity
      .find(data => data.date === date && this.currentUser.dailyStepGoal < data.numSteps);   

    if (lessMessage) {
      return `Your steps for today are ${lessMessage.numSteps}. You have not yet reached your step goal of ${this.currentUser.dailyStepGoal} steps for today.`;
    };

    if (equalMessage) {
      return `Your steps for today are ${equalMessage.numSteps}. You have reached your step goal of ${this.currentUser.dailyStepGoal} steps for today!`;
    };
    
    if (moreMessage) {
      return `Your steps for today are ${moreMessage.numSteps}. You have exceeded your step goal of ${this.currentUser.dailyStepGoal} steps for today!!`;
    };
  };

  getDaysThatExceedStepGoal() {
    const exceededStepGoal = this.usersActivity.reduce((list, data) => {
      if (this.currentUser.dailyStepGoal < data.numSteps) {
        list.push({date: data.date, steps: data.numSteps})
      }

      return list;
    }, []);

    return exceededStepGoal;
  };

  getHighestFlightsClimbed() {
    const userActivityDataCopy = this.usersActivity.map(data => data);
    const sortedData = userActivityDataCopy
      .sort((first, last) => last.flightsOfStairs - first.flightsOfStairs);
    
    const climbingRecord = sortedData.reduce((list, data) => {
      list.push({date: data.date, flights: data.flightsOfStairs});
      return list;
    }, []);
   
    return climbingRecord[0];
  };

  getAllUsersAverages(type, date) {
    const typeAverage = this.activityData.reduce((sum, data) => {
      const typeData = this.activityData
        .filter(data => data.date === date);

        sum += data[type];
      return sum / typeData.length;
    }, 0);

    return Math.round(typeAverage);
  };
};

export default Activity;