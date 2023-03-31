class Sleep {
    constructor(userID, allSleepData) {
        this.userId = userID;
        this.userSleepLogs = allSleepData.sleepData.filter((data) => {
            return data.userID === this.userId;
        })
    }

    findMostRecentDay(){
        const mostRecentDay = this.userSleepLogs.sort((a, b) => {
            return b.date - a.date 
        })

        return mostRecentDay[0].date
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

    findDetailByWeek(date, detail) {
        const selectedDayIndex = this.userSleepLogs.findIndex(log => log.date === date);

        const sevenDayDetail = this.userSleepLogs.slice(selectedDayIndex, selectedDayIndex +7).map(log => log[detail]);

        let lastWeekDetails = [0, 0, 0, 0, 0, 0, 0]

        sevenDayDetail.forEach((log, index) => {
            lastWeekDetails[index] = log;
        });

        if (selectedDayIndex < 0) {
            return 'no such date';
        } else {
            return lastWeekDetails;
        }
    };

};


export default Sleep;