import User from '../src/User';
import UserRepository from '../src/UserRepository';

class Activity {
    constructor(activityData) {
    this.activityData = activityData;
    }



  findData(id,userArrayFromRepo) {
    const userRepoInstance = new UserRepository(userArrayFromRepo)
   return userRepoInstance.findUserData(id)
  };

  findDate(date) {
    const userDate = this.activityData.find((newDate) => newDate.date === date)
    return userDate.date;
  }

  findUser(date) {
    const userActivityData = this.activityData.find((element) => {
      if (element.date === date) {
        return element;
      }
    })
    return userActivityData;
  }

getMilesFromSteps(id, userArrayFromRepo, date) {
    let userObjectData = this.findData(id,userArrayFromRepo); // gives user 1 object
    const getStepsByDate = this.findUser(date);
    const getMiles = (getStepsByDate.numSteps * userObjectData.strideLength) / 5280
    return getMiles.toFixed(1);
}

// Dashboard methods:

returnDailySteps(date) {
  const eachDayData = this.findUser(date);
  if(!eachDayData) {
    return 0
  };
  return eachDayData.numSteps
}

returnDailyMinutesActive(date) {
  const eachDayData = this.findUser(date);
  if(!eachDayData) {
    return 0
  };
  return eachDayData.minutesActive;
}

returnDailyflightsOfStairs(date) {
  const eachDayData = this.findUser(date);
  if(!eachDayData) {
    return 0
  };
  return eachDayData.flightsOfStairs
}

}
export default Activity;


//LEE:
// For a user, how many minutes active did they average for a given week (7 days)?


//THOMAS:
// For a user, did they reach their step goal for a given day (specified by a date)?
// For a user, find all the days where they exceeded their step goal // filter method!

//MORGAN:
// For a user, find their all-time stair climbing record // find method!

findAllTimeStairsClimbed(id, userArrayFromRepo) {
  let userObjectData = this.findData(id,userArrayFromRepo)
  let userObjectValues = Object.values(userObjectData)
  console.log( userObjectValues)
  const mostStairsClimbed = userObjectValues.sort((a, b) => {
    return b.flightsOfStairs - a.flightsOfStairs
  });
  return mostStairsClimbed[0].flightsOfStairs
}

// For all users, what is the average number of:
  // stairs climbed for a specified date
  // steps taken for a specific date
  // minutes active for a specific date
