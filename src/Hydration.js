import User from './User';

class Hydration {
    constructor(userHydrationData){
        this.id = userHydrationData.userID;
        this.date = userHydrationData.date;
        this.ounces = userHydrationData.numOunces;

    }

    // For a user, how many fluid ounces they consumed for a specific day (identified by a date)
    // Might need a calender dropdown (datePicker NPM)
    dailyAvgOunces() {

    }
}



export default Hydration;