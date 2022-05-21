import dayjs from 'dayjs'

class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getUserById(id) {
    const foundData = this.hydrationData.filter(data => data.userID === id);
      return foundData;
  }

  getAvgFluidOuncesById(id) {
    const allHydrationDataById = this.getUserById(id);
    const totalFluidOunces = allHydrationDataById.reduce((totalOunces, hydroObj) => {
      totalOunces += hydroObj.numOunces;
      return totalOunces;
    }, 0)
    return Math.round(totalFluidOunces / allHydrationDataById.length);
  }

  getFluidOuncesByDate(id, date) {
    const allHydrationDataById = this.getUserById(id);
    const hydrationByDate = allHydrationDataById
      .filter(hydroObj => hydroObj.date === date)
      .reduce((totalOunces, hydroObj) => {
        totalOunces += hydroObj.numOunces;
        return totalOunces;
      }, 0)
      return Math.round(hydrationByDate);
  }

  getFluidOuncesEachDayOfWeek(id, date) {
    // get all user hydration instances
    const allHydrationDataById = this.getUserById(id);

    // create array of 7 dates starting with date param
    const weekFromDate = [0,0,0,0,0,0,0].map((el, index) => {
    return dayjs(date).add([index], 'day').format('YYYY/MM/DD');
    })

    // Iterate over week array and for each date, add the date as a key
    // in the acc, and initialize the value at 0.
    // (e.g., acc = {"2019/06/15" : 0})

    // Then, get all user-specific hydration data (allHydrationDataById),
    // and filter for matching date string. This returns an array of hydro objects specific
    // to the date string.
    // (e.g., .filter => [{date: "2019/06/15"...}, {date: "2019/06/15", ....}])

    // Finally, use forEach to iterate over items in the array of filtered date
    // hydration instances, and add their respective numOunces property to the value
    // of the date key in the acc
    // (e.g., forEach => [{date: "2019/06/15", numOz: 1}, {date: "2019/06/15", numOz: 2}]
    // acc = {"2019/06/15": 3}))

    const hydroWeek = weekFromDate.reduce((weekObj, date) => {
      weekObj[date] = 0;
      allHydrationDataById.filter(hydroObj => hydroObj.date === date)
      .forEach(el => {
        weekObj[date] += el.numOunces;
      })
      return weekObj;
    }, {})
    return hydroWeek;
  }
}


export default HydrationRepository;
