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
  findDaysHydration(selectedDate){
    var result = this.hydrationData.find(day => day.date === selectedDate)
    return result
  }
  findWeekHydration(selectedDate){
    const sevenDaysAgo = new Date(new Date(selectedDate) - 7 * 24 * 60 * 60 * 1000)
    console.log("this is 7 days ago",sevenDaysAgo)  
    var newArray = this.hydrationData.filter(day => {
      var dateConverted = new Date(day.date)
      return  dateConverted > sevenDaysAgo && dateConverted <= new Date(selectedDate);
    }).sort((day1, day2) => {
      return Date.parse(day1.date) - Date.parse(day2.date)
    })
    console.log(newArray)
    return newArray
  }
};

export default User;
