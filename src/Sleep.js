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

        console.log(mostRecentDay)
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
        const convertDate = new Date(date)
        const datedSleepLogs = this.userSleepLogs.map((log) => {
            const sleepInfo = {}
            sleepInfo.date = new Date(log.date)
            sleepInfo.detail = log[detail]
            return sleepInfo
        })

        // const sevenDayDetail = datedSleepLogs.filter((log) => {
        //     return log.date >=  date && log.date <= 
        // })

        // const accendDatedSleepLogs = datedSleepLogs.sort((a, b) => {
        //     return a.date - b.date
        // })

        // const selectedDayIndex = accendDatedSleepLogs.findIndex((log) => {
        //     return log.date.getTime() === convertDate.getTime();
        // });

        // const sevenDayDetail = accendDatedSleepLogs.slice(selectedDayIndex, selectedDayIndex + 7).map(log => log.detail);

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
}

export default Sleep;