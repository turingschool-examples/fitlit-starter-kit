import User from '../src/User';
import UserRepository from '../src/UserRepository';

class Activity {
    constructor(activityData) {
    this.activityData = activityData;

      // userID: 1,
      // date: "2019/06/15",
      // numSteps: 3577,
      // minutesActive: 140,
      // flightsOfStairs: 1
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


///for the parameters of the method getMilesFromSteps 
///we have 2 things we need 1: id (we will get this from single user.id in scripts.js)
//2:and we need an instance of the class userRepo object (this should be an array of users and we can get it from userRepository on line 71 in scripts.js )
// It seems like some of theese can be combined but for now Im doing it seperatly
//
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




// For a specific day (specified by a date), return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)
// For a user, how many minutes active did they average for a given week (7 days)?
// For a user, did they reach their step goal for a given day (specified by a date)?
// For a user, find all the days where they exceeded their step goal // filter method!
// For a user, find their all-time stair climbing record // find method!

// For all users, what is the average number of:
  // stairs climbed for a specified date
  // steps taken for a specific date
  // minutes active for a specific date
