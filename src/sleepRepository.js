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

    getUserInfo(id) {
        this.user = this.sleepData.filter(user => user.userID === id)
        return this.user
    }
}

if (typeof module !== 'undefined') {
    module.exports = SleepRepository;
}