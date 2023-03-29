const dayjs = require('dayjs')

class Activity {
  constructor(activityData) {
    this.data = activityData;
  }
 
  calculateMilesWalked(date, user) {
    const dayActivities = this.data.find(activity => activity.date === date);
    const steps = dayActivities.numSteps;
    const miles = Math.round((steps * user.strideLength)/5280);
    return miles; 
  }

}

export default Activity;