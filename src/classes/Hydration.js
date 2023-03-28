class Hydration {
  constructor(hydrationData) {
    this.data = hydrationData;
  }

  findUserById(userID) {
    let userHydrationInfo = this.data.reduce((acc, currentUser) => {
      if (userID === currentUser.userID) {
        acc.push(currentUser.userID)
      }
      return acc
    }, [])
    return userHydrationInfo
  }

  calculateAverageFluidPerUser(id) {
    let allUserHydration = this.data.filter(user => id === user.userID)
    let total = allUserHydration.reduce((acc, user)=> {
    acc += user.numOunces
    return acc
    },0)
    return total/allUserHydration.length
  }
}

export default Hydration;