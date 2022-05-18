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
    const lastElement = userData.indexOf(userData[userData.length - 1]);
    const userData = this.findUser(userId);
    const weekData = userData.slice(lastElement - 6);
    return weekData.map((data) => data.numSteps);
  };

}



export default Activity;