class Activity {
    constructor(moveData) {
        this.moveData = moveData;
    }

    // findUser(user) {
    //     let userInfo = this.moveData.filter((obj) => {
    //         return obj.userID === user.id
    //     })
    // }

    getMilesWalked(user, date) {
        let userInfo = this.moveData.filter((obj) => {
            return obj.userID === user.id
        })
        let dayOfSteps = userInfo.find(obj => obj.date === date);
        let milesWalked = parseFloat(((dayOfSteps.numSteps * user.strideLength)/5280).toFixed(2))
        return milesWalked

    }

    getMinutesActive(user, date) {
        let userInfo = this.moveData.filter((obj) => {
            return obj.userID === user.id
        })
        let activeToday = userInfo.find((day) => {
            return day.date === date
        })
        return activeToday.minutesActive
    }

    getAverageActivityForWeek(user, day) {
        let userInfo = this.moveData.filter((obj) => {
            return obj.userID === user.id
        })
        let targetIndex = userInfo.findIndex(obj => {
            return obj.date === day
        })
        let weekData = userInfo.slice(targetIndex - 6, targetIndex + 1);
        let average = weekData.reduce((acc, current) => {
            return acc += current.minutesActive/weekData.length
        },0)
        return average
    }
}


if (typeof module !== 'undefined') {
    module.exports = Activity;
  }