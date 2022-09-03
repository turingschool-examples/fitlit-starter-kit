class Hydration {
    constructor(hydrationInfo) {
        this.userID = hydrationInfo.userID;
        this.date = hydrationInfo.date;
        this.numOunces = hydrationInfo.numOunces;
    }

    getUserHydration(waterArray, id) {
        let userHydration = waterArray.filter((user) => user.userID === id)
        if (userHydration.length === 0) {
            return "Invalid user ID. Please verify user ID and try again."
        }
        return userHydration
    }
    
    userAverageOunces(waterArray, id) {
        let currentUser = this.getUserHydration(waterArray, id)
        let totalAmount = currentUser.reduce((totalOz, dayOz) => {
            totalOz += dayOz.numOunces;
            return totalOz;
        }, 0);
        let totalAverage = parseFloat((totalAmount / currentUser.length).toFixed(0));
        return totalAverage
    }
    
    mostRecentOunces(waterArray, userID) {
        let userOunces = this.getUserHydration(waterArray, userID);
        let userMostRecent = userOunces.sort((oldest, newest) => newest.date - oldest.date)
        let findLastDate = userMostRecent[0];
        return findLastDate
    }
    
    findOuncesByDate(waterArray, userID, date) {
        let userOunces = this.getUserHydration(waterArray, userID)
        let findDate = userOunces.find(dateOunces => dateOunces.date === date)
        return findDate.numOunces
    }
    
    userOuncesPerWeek(waterArray, userID) {
        let currentUser = this.getUserHydration(waterArray, userID)
        let weekOuncesSorted = currentUser.sort((oldest, newest) => oldest.date - newest.date)
            .splice(0, 7)
            .map(hydrationInfo => hydrationInfo.numOunces)
        return weekOuncesSorted;
    }
}

export default Hydration;