import Hydration from '../src/Hydration'; 

class HydrationRepository {
    constructor(data) {
      this.users = data.map((userObj) => { return new Hydration(userObj) });
    }
    avgOunces(){
        const average = this.users.reduce((sum, person) => {
            sum += person.ounces
            return sum
        }, 0)
        return Math.round(average/this.users.length);
    }
}

export default HydrationRepository;