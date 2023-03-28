class Sleep {
    constructor(userID, allSleepData) {
        this.userId = userID;
        this.userSleepLogs = allSleepData.filter((data) => {
            return data.userID === this.userId;
        })
    }

    findAllTimeAvg(attribute) {
        // For a user (identified by their userID), the average number of hours slept per day
        const totalOfAttribute = this.userSleepInfo.reduce((acc, currentVal) => {
            return acc += currentVal[attribute]
        }, 0)

        return totalOfAttribute / this.userSleepInfo.length;
    }
    // avgNumberHoursSleptPerDay() {
    //     // For a user (identified by their userID), the average number of hours slept per day
    //     const totalHours = this.userSleepInfo.reduce((acc, currentVal) => {
    //         return acc += currentVal.hoursSlept
    //     }, 0)

    //     return totalHours / this.userSleepInfo.length;
    // }

    // avgSleepQualityPerDayAlltime() {
    //     // For a user, their average sleep quality per day over all time
    //     const totalSleepQuality = this.userSleepInfo.reduce((acc, currentVal) => {
    //         return acc += currentVal.sleepQuality;
    //     }, 0)

    //     return totalSleepQuality / this.userSleepInfo.length;
    // }

    findAttributeByDay(date, attribute) {
        // For a user, how many hours they slept for a specific day (identified by a date)
        const selectedDay = this.userSleepLogs.find((log) => {
            return log.date === date;
        })
        if (!selectedDay) {
            return 'no such date'
        } else if (!selectedDay[attribute]) {
            return 'no such sleep informaiton'
        } else {
            return selectedDay[attribute];
        }
    };

    findAttributeByWeek(date, attribute) {
        const decendingSleepLogs = this.userSleepLogs.sort((a, b) => {
            return b.date - a.date
        });

        const selectedDayIndex = this.decendingSleepLogs.findIndex((log) => {
            return log.date === date
        });

        const logKeys = Object.keys(decendingSleepLogs[selectedDayIndex])
        if (selectedDayIndex < 0) {
            return 'no such date'
        } else if (!logKeys.includes(attribute)) {
            return 'no such sleep information'
        } else {
            return [
                decendingSleepLogs[selectedDayIndex][attribute],
                decendingSleepLogs[selectedDayIndex + 1][attribute],
                decendingSleepLogs[selectedDayIndex + 2][attribute],
                decendingSleepLogs[selectedDayIndex + 3][attribute],
                decendingSleepLogs[selectedDayIndex + 4][attribute],
                decendingSleepLogs[selectedDayIndex + 5][attribute],
                decendingSleepLogs[selectedDayIndex + 6][attribute],
            ]
        }



    }


export default Sleep;