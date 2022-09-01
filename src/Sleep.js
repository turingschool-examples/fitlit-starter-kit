class Sleep {
    constructor(sleepInformation) {
        this.userID = sleepInformation.userID;
        this.date = sleepInformation.date;
        this.hoursSlept = sleepInformation.hoursSlept;
        this.sleepQuality = sleepInformation.sleepQuality;
    }

    getSleepByID(sleepArray, id) {
        let userSleepInfo = sleepArray.filter((user) => user.userID === id)
        if (userSleepInfo.length === 0) {
            return "Invalid user ID. Please verify user ID and try again."
        }
        return userSleepInfo
    };

    getTotalUserAverageHoursSleep(sleepArray, id) {
        let currentUser = this.getSleepByID(sleepArray, id)
        let totalAmount = currentUser.reduce((totalHrs, dayHrs) => {
            totalHrs += dayHrs.hoursSlept;
            return totalHrs;
        }, 0);
        let totalAverage = parseFloat((totalAmount / currentUser.length).toFixed(0));
        return totalAverage
    };

    getTotalUserQualitySleep(sleepArray, id) {
        let currentUser = this.getSleepByID(sleepArray, id)
        let totalAmount = currentUser.reduce((totalQlty, dayQlty) => {
            totalQlty += dayQlty.sleepQuality;
            return totalQlty;
        }, 0);
        let totalAverage = parseFloat((totalAmount / currentUser.length).toFixed(0));
        return totalAverage
    }

    userHoursSleptOnDate(sleepArray, userID, date) {
        let userHours = this.getSleepByID(sleepArray, userID)
        let findDate = userHours.find(dateHours => dateHours.date === date)
        return findDate.hoursSlept
    };

    mostRecentSleep(sleepArray, userID) {
        let userHours = this.getSleepByID(sleepArray, userID);
        let mostRecentSleep = userHours.sort((oldest, newest) => newest.date - oldest.date)
        let findLastDate = mostRecentSleep[0];
        return findLastDate;
    }

    userHoursSleptForWeek(sleepArray, userID) {
        let currentUser = this.getSleepByID(sleepArray, userID)
        let weekHoursSorted = currentUser.sort((oldest, newest) => oldest.date - newest.date)
            .splice(0, 7)
            .map(sleepInformation => sleepInformation.hoursSlept)
        return weekHoursSorted
    };

    userQualityOnDate(sleepArray, userID, date) {
        let userQuality = this.getSleepByID(sleepArray, userID)
        let findDate = userQuality.find(dateQuality => dateQuality.date === date)
        return findDate.sleepQuality
    }

    userQualityForWeek(sleepArray, userID) {
        let currentUser = this.getSleepByID(sleepArray, userID)
        let weekQualitySorted = currentUser.sort((oldest, newest) => oldest.date - newest.date)
            .splice(0, 7)
            .map(sleepInformation => sleepInformation.sleepQuality)
        return weekQualitySorted
    }


}

export default Sleep;

