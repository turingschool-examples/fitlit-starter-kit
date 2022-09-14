class Activity {
    constructor(userData) {
    this.userData = userData;    
    }

  findUserDataID(id) {
    const activityData = this.userData.filter(activityObj => activityObj.userID === id);
    return activityData;
  };

  getMilesFromStrideLength(id) {
    let userStrideData = this.findUserDataID(id);
    const strideLengthByDate = userStrideData.map((userDate) => userDate.date).pop();
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