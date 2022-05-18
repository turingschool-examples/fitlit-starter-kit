class Sleep {
  constructor(userId){
    this.userId = userId;
//  average sleep quality per day over all time
    this.avgSleepQuality = 0;
//  sleep quality for a specified day
    this.sleepQuality = 0;
//  hours slept per day over course of a given week
    this.weeklyAverage = 0;
  }
}

export default Sleep;

//I think I am creating an object that will live within
//the User class instantiation.
