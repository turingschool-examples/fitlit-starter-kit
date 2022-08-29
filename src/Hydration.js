class Hydration {
    constructor(hydrationInfo) {
        this.hydrationData = hydrationInfo
        this.userHydrationArray = []
    }

    getUserHydration(id) {
        let userHydration = this.hydrationData.filter((user) => user.userID === id)
        this.userHydrationArray.push(userHydration);
        return userHydration
    }
    
    userAverageOunces(waterArray) {
        let totalAmount = waterArray.reduce((totalOz, dayOz) => {
            totalOz += dayOz.numOunces;
            return totalOz;
        }, 0);
        let totalAverage = parseFloat((totalAmount / waterArray.length).toFixed(0));
        return totalAverage
    }

    mostRecentOunces(waterArray) {
        let findLastDate = waterArray.length - 1;
        let mostRecentDate = waterArray[findLastDate];
        return mostRecentDate.numOunces;
    }

    userOuncesOnDate(date) {
        //input userHydration array
        //output numOunces and date keys
        //we need a way to get the date going back 7 days.
        //split and join the dates to remove the /
    }

    //userOuncesPerWeek(start) {
        // let latestDate = date.sort((a, b) => b.date - a.date)
        // return latestDate;
    // }
}

export default Hydration;