class SleepRepository {
    constructor(sleepData) {
        this.sleepData = sleepData;
        this.averageSleepQuality; 
        this.user; 
    }

    getAllUsersAverageSleepQuality() {
        let allSleepQuality = this.sleepData.reduce((accumulator, sleepObj) => {
            accumulator += sleepObj.sleepQuality
            return accumulator
        }, 0)
        let averageSleepQuality = (allSleepQuality / this.sleepData.length)
        this.averageSleepQuality = Number(averageSleepQuality.toFixed(2))
        return this.averageSleepQuality
    }

    findUsersWithSleepQualityMoreThanThree(date) {
        return this.sleepData.filter(users => users.sleepQuality > 3)
        // Find all users who average a sleep quality greater than 3
        // for a given week(7 days) - you should be able to calculate this
        // for any week, not just the latest week
    }

    getUserInfo(id) {
        this.user = this.sleepData.filter(user => user.userID === id)
        return this.user
    }
}

if (typeof module !== 'undefined') {
    module.exports = SleepRepository;
}