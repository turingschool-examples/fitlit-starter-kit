class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
  };

  returnFirstName() {
    let userNameSplitArray = this.name.split(' ');
    return userNameSplitArray[0];
  };
  findDaysHydration(date){
    var result = this.hydrationData.find(day => day.date === date)
    return result
  }
  // reference hydration test data to pull examplecases from
    // Parameter of a ID should be passed
    //parameter for the end date of the 7 days should be entered
    // Use a combination of filter and reduce to parse out the objects that contain both the ID and the range of date -7
    //return an object where keys are dates and values are num of ounces

};
export default User;
