import UserActivity from "./UserActivity";
import SleepSeries from "./SleepSeries";
import HydrationSeries from "./HydrationSeries";

class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
    this.userSleepData = new SleepSeries();
    this.userHydrationData = new HydrationSeries();
  }

  getFirstName() {
    let firstName = this.name.split(" ");
    return firstName[0];
  }
}

export default User;
