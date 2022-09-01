import hydrationData from "./data/hydration-data"

class Hydration {
    constructor(id, hydrationData) {
        this.userID = id
        this.date = hydrationData[0].date
        this.numOunces = hydrationData[0].numOunces
        this.data = hydrationData
    }
    returnDailyHydrateAvg() {
        const hydrationPerDay = this.data.map(hydration => {
            return hydration.numOunces
        })
        const hydrationAvgPerDay = hydrationPerDay.reduce((totalOunces, currentOunces) => {
            return totalOunces + currentOunces
        }, 0)
        return Math.round(hydrationAvgPerDay / this.data.length)
    }
    returnOuncesByDate(thisDate) {
        const ounceByDate = this.data.find(({date}) => date === thisDate)
        return ounceByDate.numOunces
    }
}

export default Hydration