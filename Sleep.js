class Sleep {
    constructor(userID, allSleepData) {
        this.userId = userID;
        this.userSleepLogs = allSleepData.sleepData.filter((data) => {
            return data.userID === this.userId;
        })
    }

    findAllTimeAvgOfDetail(detail) {
        const totalOfDetail = this.userSleepInfo.reduce((acc, currentVal) => {
            return acc += currentVal[detail]
        }, 0)

        return totalOfDetail / this.userSleepInfo.length;
    }

    findDetailByDay(date, detail) {
        const selectedDay = this.userSleepLogs.find((log) => {
            return log.date === date;
        })
        if (!selectedDay) {
            return 'no such date'
        } else if (!selectedDay[detail]) {
            return 'no such sleep details'
        } else {
            return selectedDay[detail];
        }
    };

    findDetailByWeek(date, detail) {
        const acendingSleepLogs = this.userSleepLogs.sort((a, b) => {
            return a.date - b.date
        });

        const selectedDayIndex = this.acendingSleepLogs.findIndex((log) => {
            return log.date === date
        });

        const sevenDayDetail = acendingSleepLogs.slice(selectedDayIndex, selectedDayIndex + 7).map(log => log[detail])
        
        let lastWeekDetails = [0, 0, 0, 0, 0, 0, 0]

         sevenDayDetail.forEach((log, index) => {
                lastWeekDetails[index] = log
            })
        

        if (selectedDayIndex < 0) {
            return 'no such date';
        } else if (!logKeys.includes(detail)) {
            return 'no such sleep information';
        } else {
            return lastWeekDetails
        }
    };

}

export default Sleep;

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