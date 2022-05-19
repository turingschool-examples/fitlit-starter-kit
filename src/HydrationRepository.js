import Hydration from '../src/Hydration';

class HydrationRepository {
    constructor(data) {
      this.users = data.map((userObj) => { return new Hydration(userObj) });
    }

    // For a user the average fluid ounces consumed per day for all time
    avgOunces(id) {
        const userAqua = this.users.filter((user) => {
            return user.id === id;
        })
        const average = userAqua.reduce((sum, person) => {
            sum += person.ounces
            return sum
        }, 0)
        return Math.round(average/userAqua.length);
    }

    // For a user, how many fluid ounces they consumed for a specific day (identified by a date)
    dailyAvgOunces(id, date) {
        const userByDay = this.users.filter((user) => {
            return user.id === id;
        })
        // updated Iterator below to .find to return an element to use .ounces on
        const waterByDay = userByDay.find((user) => {
            return user.date === date;
    }).ounces
    console.log(waterByDay)
    return waterByDay
  }
}

export default HydrationRepository;
