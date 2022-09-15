import User from '../src/User';
import UserRepository from '../src/UserRepository';

class Activity {
    constructor(activityData, userID) {
    this.activityData = activityData;
    this.userID = userID;
    console.log('num', userID)
      // userID: 1,
      // date: "2019/06/15",
      // numSteps: 3577,
      // minutesActive: 140,
      // flightsOfStairs: 1
    }

  findUserDataID(id) {
    const activityData = this.activityData.filter(activityObj => activityObj.userID === id);
    return activityData;
  };

  findData(id) {
    const singleUserData = this.userData.find(user => user.id === id);
    
    return this.activityData.find(data => data.id === data);
    //can we incorporate date?  If they match, give us the user
    return this.activityData.find(date => date.id === date);
  };



  getMilesFromSteps(id, userInput) {
    let userStrideData = this.findUserDataID(id);
    const getMiles = (userInput * user.strideLength) / 5280
    console.log('userINput', userInput)
    console.log('strie', user)
    console.log(getMiles)
    return getMiles.toFixed(1);

  }

}

export default Activity;




// For a specific day (specified by a date), return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)
// For a user, (identified by their userID) how many minutes were they active for a given day (specified by a date)?
// For a user, how many minutes active did they average for a given week (7 days)?
// For a user, did they reach their step goal for a given day (specified by a date)?
// For a user, find all the days where they exceeded their step goal // filter method!
// For a user, find their all-time stair climbing record // find method!
// For all users, what is the average number of:
// stairs climbed for a specified date
// steps taken for a specific date
// minutes active for a specific date
