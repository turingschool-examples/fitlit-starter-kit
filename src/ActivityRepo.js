class ActivityRepo {
  constructor(activityData, userDataset) {
    this.activityData = activityData;
    this.userData = userDataset;
    this.dailyAverages = {}; 
    this.weeklyAverages = {};
  }

  findDayAndUser(id, date) {
    const day = this.activityData.find(data => data.userID === id && data.date === date);
    const user = this.userData.find(data => data.id === id);
    return {
      day: day,
      user: user
    }
  }

  findWeekDates(endDate) {    
    const lastTwo = endDate.slice(-2);
    let diff;
    if (parseInt(lastTwo) < 7) {
      diff = 7 - parseInt(lastTwo);
    }
    
    let dates = [endDate, endDate, endDate, endDate, endDate, endDate, endDate];    
    let toRemove31 = diff - 1 || 0;
    let toRemove30 = diff - 1 || 0;
    let toRemove28 = diff - 1 || 0;
    
    const newDates = dates.reduce((acc, date, index) => {      
      const toRemove = 6 - index;
      const month = endDate.slice(5, 7);      
      const has31 = [1, 3, 5, 7, 8, 10, 12];
      const has30 = [4, 6, 9, 11];
      const has28 = [2];
      if (parseInt(date.slice(-2)) - toRemove <= 0 && has31.includes(parseInt(month) - 1)) {
        let newMonth = parseInt(month) - 1;
        let newDate = 31 - toRemove31;
        if (newMonth.toString().length === 1) {
          newMonth = `0${newMonth}`
        }
        
        if (newDate.toString().length === 1) {
          newDate = `0${newDate}`;
        }
        
        date = `2019/${newMonth}/${newDate}`;        
        toRemove31 -= 1;
      } else if (parseInt(date.slice(-2)) - toRemove <= 0 && has30.includes(parseInt(month))) {
        let newMonth = parseInt(month) - 1;
        let newDate = 30 - toRemove30;
        if (newMonth.toString().length === 1) {
          newMonth = `0${newMonth}`
        }
        
        if (newDate.toString().length === 1) {
          newDate = `0${newDate}`;
        }
        
        date = `2019/${newMonth}/${newDate}`;
        toRemove30 -= 1;
      } else if (parseInt(date.slice(-2)) - toRemove <= 0 && has28.includes(parseInt(month))) {
        let newMonth = parseInt(month) - 1;
        let newDate = 28 - toRemove28;
        if (newMonth.toString().length === 1) {
          newMonth = `0${newMonth}`
        }
        
        if (newDate.toString().length === 1) {
          newDate = `0${newDate}`;
        }
        
        date = `2019/${newMonth}/${newDate}`;
        toRemove28 -= 1;
      } else {        
        let newDate = parseInt(lastTwo) - toRemove;        
        
        if (newDate.toString().length === 1) {
          newDate = `0${newDate}`;
        }
        
        date = endDate.slice(0, 8) + newDate;
      }

      acc.push(date);
      return acc;
    }, []);

    return newDates;
  }

  findWeekAndUser(id, endDate) {
    const user = this.userData.find(data => data.id === id);
    const week = this.findWeekDates(endDate);    
    return {
      user: user,
      week: week
    }    
  }

  calculateMiles(id, date) {    
    const allData = this.findDayAndUser(id, date);
    const stride = allData.user.strideLength;
    const miles = (allData.day.numSteps * stride) / 5280;
    const formattedMiles = parseFloat(miles.toFixed(2));        
    return formattedMiles;
  }

  calculateAvgMinutesActive(id, endDate) {
    const week = this.findWeekDates(endDate);
    const weekOfActivity = this.activityData.filter(day => week.includes(day.date));
    const theirWeek = weekOfActivity.filter(day => day.userID === id);
    const minutes = theirWeek.map(day => day.minutesActive);
    return Math.round(minutes.reduce((total, day) => total + day, 0) / 7);    
  }

  calculateDaysExceededGoal(id) {
    const goal = this.userData.find(user => user.id === id).dailyStepGoal;
    return this.activityData.filter(data => data.numSteps >= goal && data.userID === id).map(data => data.date);    
  }

  calculateStairRecord(id) {
    return this.activityData.reduce((record, data) => {
      if (data.flightsOfStairs > record && data.userID === id) {
        record = data.flightsOfStairs;
      }

      return record;
    }, 0);
  }

  calculateDailyAverages(date) {
    // get data for date
    // record number of pieces of data here
    // iterate through data, add up totals for stairs, steps, minutes
    // divide each by # pieces data
    // add to dailyAverages obj, key is date, value is obj holding averages

    const dateData = this.activityData.filter(data => data.date === date);
    const piecesOfData = dateData.length;
    const totals = dateData.reduce((totals, data) => {
      if (!totals.stairs && !totals.steps && !totals.minutesActive) {
        totals.stairs = data.flightsOfStairs;
        totals.steps = data.numSteps;
        totals.minutesActive = data.minutesActive
      } else {
        totals.stairs += data.flightsOfStairs;
        totals.steps += data.numSteps;
        totals.minutesActive += data.minutesActive;
      }

      return totals;
    }, {});

    totals.stairs = Math.round(totals.stairs / piecesOfData);
    totals.steps = Math.round(totals.steps / piecesOfData);
    totals.minutesActive = Math.round(totals.minutesActive / piecesOfData);

    this.dailyAverages[date] = totals;
  }

  calculateWeeklyAverages(endDate) {
    const week = this.findWeekDates(endDate);
    const weeklyTotals = week.reduce((weekData, date) => {
      this.calculateDailyAverages(date);      
      if (!weekData.stairs && !weekData.steps && !weekData.minutesActive) {
        weekData.stairs = this.dailyAverages[date].stairs;
        weekData.steps = this.dailyAverages[date].steps;
        weekData.minutesActive = this.dailyAverages[date].minutesActive;
      } else {
        weekData.stairs += this.dailyAverages[date].stairs;
        weekData.steps += this.dailyAverages[date].steps;
        weekData.minutesActive += this.dailyAverages[date].minutesActive;
      }

      return weekData;
    }, {});

    weeklyTotals.stairs = Math.round(weeklyTotals.stairs / 7);
    weeklyTotals.steps = Math.round(weeklyTotals.steps / 7);
    weeklyTotals.minutesActive = Math.round(weeklyTotals.minutesActive / 7);

    this.weeklyAverages[endDate] = weeklyTotals;
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}