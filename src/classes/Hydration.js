class Hydration {
  constructor(hydrationData) {
    this.data = hydrationData;
  }
  
  calculateAverageFluidPerUser(userID) {
    let allUsersFluid = this.data.filter((user) => userID === user.userID);
    console.log(allUsersFluid);
    return allUsersFluid.reduce((acc, user) => {
      return (acc += user.numOunces) / allUsersFluid.length.toFixed(2);
    }, 0);
  }
}

export default Hydration;