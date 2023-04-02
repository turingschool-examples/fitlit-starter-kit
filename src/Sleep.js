class Sleep {
    constructor(userID, allSleepData) {
        this.userId = userID;
        this.userSleepLogs = allSleepData.sleepData.filter((data) => {
            return data.userID === this.userId;
        })
    }

    findMostRecentDay(){
        return this.userSleepLogs[this.userSleepLogs.length -1].date
    }

    findAllTimeAvgOfDetail(detail) {
        const totalOfDetail = this.userSleepLogs.reduce((acc, currentVal) => {
            return acc += currentVal[detail]
        }, 0)

        return Math.round(totalOfDetail / this.userSleepLogs.length * 10) / 10;
    }

    findDetailByDay(date, detail) {
        const selectedDay = this.userSleepLogs.find((log) => {
            return log.date === date;
        })

        if (!selectedDay) {
            return 'no such date'
        } else {
            return selectedDay[detail];
        }
    };

    findDetailLastSevenDays(detail) {
         const sevenDayDetail = this.userSleepLogs.slice(-7).map(log => log[detail]);

        return sevenDayDetail
    };

};

export default Sleep;