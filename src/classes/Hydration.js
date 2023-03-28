const dayjs = require('dayjs')

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
    return userHydrationInfo;
  }

  calculateAverageFluidPerUser(id) {
    let allUserHydration = this.data.filter(user => id === user.userID)
    let total = allUserHydration.reduce((acc, user)=> {
    acc += user.numOunces
    return acc
    },0)
    return total/allUserHydration.length.toFixed(2)
  }

  dailyOuncesConsumed(user, date) {
    const ouncesByDay = this.data.find((entry) => {
      return entry.userID === user && entry.date === date
    });
    return ouncesByDay.numOunces;
  };

  weeklyOuncesConsumed(user, date) {
    const startDate = dayjs(date);
    const endDate = startDate.add(6, "day");
    const ouncesByWeek = this.data.filter((entry) => {
      return entry.userID === user && dayjs(entry.date).isAfter(startDate.subtract(1, "day")) && dayjs(entry.date).isBefore(endDate.add(1, "day"));
    });
    return ouncesByWeek;
  }
}

export default Hydration;