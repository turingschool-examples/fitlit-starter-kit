class SleepEntry {
    constructor(entry) {
        this.id = entry.userID
        this.date = entry.date
        this.hoursSlept = entry.hoursSlept
        this.sleepQuality = entry.sleepQuality
    }
}

module.exports = SleepEntry;