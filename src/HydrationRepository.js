import Hydration from '../src/Hydration';

class HydrationRepository {
    constructor(data) {
      this.users = data.map((userObj) => { return new Hydration(userObj) });
    }

    displayAllTimeAvgOunces(id) {
        const userAqua = this.users.filter((user) => {
            return user.id === id;
        })
        const average = userAqua.reduce((sum, person) => {
            sum += person.ounces
            return sum
        }, 0)
        return Math.round(average/userAqua.length);
    }

    displayDailyAvgOunces(id, date) {
        const userByDay = this.users.filter((user) => {
            return user.id === id;
        })
        const waterByDay = userByDay.find((user) => {
            return user.date === date;
        }).ounces
        return waterByDay;
    }

    displayWeekWaterIntake(date){
        const filteredFluidById = this.users;
        const index = filteredFluidById.findIndex(data => {
          return data.date === date
        })
        const week = filteredFluidById.slice((index - 6) , (index + 1))
          .map(data => {
            return data.ounces
          })
        return week;
    }
    
}

export default HydrationRepository;
