import User from './User';

class Hydration {
    constructor(userHydrationData){
        this.id = userHydrationData.userID;
        this.date = userHydrationData.date;
        this.ounces = userHydrationData.numOunces;

    }

}



export default Hydration;