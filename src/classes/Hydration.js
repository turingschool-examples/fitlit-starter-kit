const dayjs = require('dayjs')

class Hydration {
  constructor(hydrationData) {
    this.data = hydrationData;
  }
  
  findUserById(userID) {
    let userHydrationInfo = this.data.reduce((array, currentUser) => {
      if (userID === currentUser.userID) {
        array.push(currentUser.userID);
      }
      return array;
    }, [])
    return userHydrationInfo;
  }

  calculateAverageFluidPerUser(id) {
    let allUserHydration = this.data.filter(user => id === user.userID);
    let total = allUserHydration.reduce((num, user)=> {
    num += user.numOunces;
    return num;
    },0)
    return parseInt((total/allUserHydration.length).toFixed(2));
  }

  dailyOuncesConsumed(user, date) {
    const ouncesByDay = this.data.find((entry) => {
      return entry.userID === user && entry.date === date;
    });
    return ouncesByDay.numOunces;
  };

  weeklyOuncesConsumed(userID, date) {
    const endDate = dayjs(date);
    const startDate = endDate.subtract(6, "day");
    const ouncesByWeek = this.data.filter((entry) => {
      return entry.userID === userID && dayjs(entry.date).isAfter(startDate.subtract(1, "day")) && dayjs(entry.date).isBefore(endDate.add(1, "day"));
    });
    return ouncesByWeek;
  }
}

export default Hydration;