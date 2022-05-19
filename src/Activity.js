import userData from "../src/data/users";

class Activity {
  constructor(activityInfo) {
    this.activityData = activityInfo;
  };

  findUser(userId) {
    if (!this.activityData.map((data) => data.userID).includes(userId)) {
      return "User does not exist";
    }
    return this.activityData.filter((id) => id.userID === userId);
  };

  activeMinutesDay(userId, date) {
    let findUser = this.findUser(userId);
    let minsActivity = findUser.find((user) => {
      if (user.date === date) {
        return user;
      }
    }).minutesActive;
    return minsActivity;
  };

  activityStepsForWeek(userId) {
    const userData = this.findUser(userId);
    const lastElement = userData.indexOf(userData[userData.length - 1]);
    // const userData = this.findUser(userId);
    const weekData = userData.slice(lastElement - 6);

    return weekData.map((data) => 
    data.numSteps);
  };

  stairClimbRecord(userId) {
    let findUser = this.findUser(userId);

    let stairs = findUser
      .map((user) => {
        return user.flightsOfStairs;
      })
      .sort((a, b) => {
        return b - a;
      });
    return stairs.shift();
  };

  milesPerDay(userId, date) {
    let findUser = this.findUser(userId);
    let numberSteps = findUser.find((user) => {
      if (user.date === date) {
        return user;
      }
    }).numSteps;
    let miles = numberSteps / 2000;

    return Math.round(miles * 100) / 100;
  };

  activityFlightsPerWeek(userId) {
    const userFlightsData = this.findUser(userId);

    const lastElement = userFlightsData.indexOf(
      userFlightsData[userFlightsData.length - 1]
    );
    const weekData = userFlightsData.slice(lastElement - 6);

    return weekData.map((data) => data.flightsOfStairs);
  };

  hitDailyStepGoal(userId, date) {
    let findUser = this.findUser(userId);
    let user = userData.find((user) => {
      if (user.id === userId) {
        return user;
      }
    });

    let stepsDay = findUser.find((user) => {
      if (user.date === date) {
        return user;
      }
    }).numSteps;
    if (user.dailyStepGoal <= stepsDay) {
      return true;
    } else { 
      return false;
    }
  };

  allDaysStepGoal(userId) {
    let findUser = this.findUser(userId);
    let user = userData.find((user) => {
      if (user.id === userId) {
        return user;
      }
    });
    let week = findUser.reduce((a, b) => {
      if (b.numSteps >= user.dailyStepGoal) {
        a.push(b.date);
      }
      return a;
    }, []);
    return week;
  };

}

export default Activity;