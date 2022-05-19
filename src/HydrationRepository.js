import Hydration from '../src/Hydration'; 

class HydrationRepository {
    constructor(data) {
      this.users = data.map((userObj) => { return new Hydration(userObj) });
    }

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
    // Might need a calender dropdown (datePicker NPM)
    // need to access the date and return the water value in oz
    dailyAvgOunces(id, date) {
        const userByDay = this.users.filter((user) => {
            return user.id === id;
        })
        const waterByDay = userByDay.filter((user) => {
            return user.date === date;
    })
    console.log(waterByDay)
    return waterByDay
}

}

export default HydrationRepository;