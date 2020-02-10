class Hydration {
  constructor(hydrationData, userID) {
    this.hydrationData = hydrationData;
    this.userID = userID;
  }

  fluidConsumedByDate(date) {
    const fluid = this.hydrationData.find(data => {
<<<<<<< HEAD
      return data.date === date;
        console.log(data.numOunces)
    })
     return fluid.numOunces;
  }

  fluidConsumedALlTime(id) {
    return this.hydrationData.reduce((acc, all) => {
      if(all.userID === id) {
        console.log('made it')
=======
       return data.date === date;
    })
     return fluid.numOunces;
  }

  fluidConsumededWeekly(id) {
    return this.hydrationData.slice(-7).map(day => day.numOunces);
  }

  fluidConsumedALlTime(id){
     let allTime = this.hydrationData.reduce((acc, all) => {
      if(all.userID === id) {
>>>>>>> 20fc9273d733fc8ca785e0b1c8d197ae42d345e7
        acc += all.numOunces;
      }
    return acc
    }, 0)
<<<<<<< HEAD
=======
    return allTime;
>>>>>>> 20fc9273d733fc8ca785e0b1c8d197ae42d345e7
  }
}

if(typeof module !== 'undefined') {
  module.exports = Hydration;
}
