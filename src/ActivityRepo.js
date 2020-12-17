class ActivityRepo {
  constructor(activityData, userDataset) {
    this.activityData = activityData;
    this.userData = userDataset;    
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
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}

/*
miles divided by stride length = # steps / mile
I can do steps * stride length to get total miles

{
  "userID": 33,
  "date": "2019/09/21",
  "numSteps": 4070,
  "minutesActive": 168,
  "flightsOfStairs": 3
}

{
  "id": 33,
  "name": "David Whitaker",
  "address": "124 Random Lane, Denver CO, 66666",
  "email": "damwhitmaybeidontknow@gmail.com",
  "strideLength": 2.6,
  "dailyStepGoal": 10000,
  "friends": [
    1,
    4
  ]
}

8855 (steps) * 2.6 (stride length) = 23023
4.360 miles
*/