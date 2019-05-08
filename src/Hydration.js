// let hydrationData = 

class Hydration {
  constructor(userObj) {
    this.userObj = userObj;
  }
  findHydrationData(h2oData) {
    return h2oData.find(ele => ele.userID === this.userObj.id)
  }
  averageOuncesPerDay(h2oData) {
    let ounces = this.findHydrationData(h2oData).hydrationData
    let average = ounces.map(ele => ele.numOunces).reduce((acc, value) => {
      acc += value / ounces.length
      return acc
    }, 0)
    return Math.floor(average)
  }
  amountHydratedByDay(){
    
  }
}

// get the id from the userObj
// whatever id you plug into the function

// hydrationData.userId[userObj.id]
if (typeof module !== 'undefined') {
  module.exports = Hydration;
}