class Hydration {
    constructor(hydrationData) {
        this.hydration = hydrationData
    }

    findUserData(id) {
        let currentUser = this.hydration.filter(data => data.userID === id)
        .sort((a, b)    =>  {
            return new Date(b.date)- new Date(a.date)
        })
        return currentUser
    }

    findDailyFluidIntake(id, date) {
        const userHydration = this.hydration.reduce((acc, currVal) => {
            if (id === currVal.userID && date === currVal.date) {
                acc += currVal.numOunces
            }
            return acc
        }, 0)
        return userHydration
    }

    calculateFluidWeekly(id) {
        const userWeekly = this.hydration.filter(data => data.userID === id).sort((a, b) => {
            return b.date - a.date
        }).map((day) => day.numOunces)
        const week = userWeekly.slice(0, 7)
        return week
    }

    calculateAllTimeAverage(id) {
        const allWater = this.hydration.filter(data => data.userID === id)
        const totalOunces = allWater.reduce((acc, currVal) => {
            acc += currVal.numOunces
            return acc
        }, 0)
        return Math.floor(totalOunces / allWater.length)
    }
}

export default Hydration;
