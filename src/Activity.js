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

  findUserData = (id) => { // Added by Lee
    const findUser = this.activityData.filter((userActiveData) =>  userActiveData.userID === id)
    return findUser;
   }


  findDate(date) {
    const userDate = this.activityData.find((newDate) => newDate.date === date)
    return userDate.date;

  }
  // I was thinking maybe we could discuss maybe throwing this funciton out?? It currently helps many tests pass but I think
  // we could utilize another function to access the date for a user - just a thought

  findUser(date) {
    const userActivityData = this.activityData.find((element) => {
      if (element.date === date) {
        return element;
      }
    })
    console.log(userActivityData)
    return userActivityData;
  }


getUserMilesFromSteps(id, userArrayFromRepo, date) {

    let userObjectData = this.findData(id,userArrayFromRepo); // gives user 1 object
    const getStepsByDate = this.findUser(date);
    const getMiles = (getStepsByDate.numSteps * userObjectData.strideLength) / 5280
    return getMiles.toFixed(1);
}

getUserAvgMinutesActivePerWeek(id, date) {
  const singleActiveUser = this.findUserData(id);
  const userActiveDates = singleActiveUser.findIndex((user) => {
  return user.date === date;
 })
 const sevenActiveDays = this.activityData.slice(userActiveDates -6, userActiveDates +1)
 const userAvgActiveMins = sevenActiveDays.reduce((avgActiveMins, user) => {
  avgActiveMins += user.minutesActive;
  return avgActiveMins;
 }, 0)
 return (userAvgActiveMins/ 7).toFixed(1);
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

returnDailyFlightsOfStairs(date) {
  const eachDayData = this.findUser(date);
  if(!eachDayData) {
    return 0
  };
  return eachDayData.flightsOfStairs
}

// Averages for all users - added by Lee

returnAllUsersAvgFlights(date) {
  let average = 0;
  let userDates = this.findDate(date)
  const usersAverageFlights = this.activityData.reduce((acc, activeUser) => {
    if (activeUser.date === userDates) {
      acc.push(average += activeUser.flightsOfStairs)
    }
    return acc; 
   }, [])
   return (average / usersAverageFlights.length).toFixed(1);
}

returnAllUsersAvgStepsTaken(date) {
  let average = 0;
  let userDates = this.findDate(date)
  const usersAverageSteps = this.activityData.reduce((acc, activeUser) => {
    if (activeUser.date === userDates) {
      acc.push(average += activeUser.numSteps)
    }
    return acc; 
   }, [])
   return (average / usersAverageSteps.length);
}


//LEE:
// For a user, how many minutes active did they average for a given week (7 days)?


//THOMAS:

returnAllUsersAvgMinsActive(date) {
  let average = 0;
  let userDates = this.findDate(date)
 const usersActiveMins = this.activityData.reduce((acc, activeUser) => {
  if (activeUser.date === userDates) {
    acc.push(average += activeUser.minutesActive)
  }
  return acc; 
 }, [])
 return (average / usersActiveMins.length).toFixed(1);
}
}
export default Activity;



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

