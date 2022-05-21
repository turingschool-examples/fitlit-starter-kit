class HydrationRepository {
    constructor(data) {
        this.hydrationData = data;
    }

    getHydrationDataForUser(idNum) {
        const hydrationDataForUser = this.hydrationData.filter((obj) => {
            return obj.userID === idNum;
        });
        return hydrationDataForUser;
    };

    getAllTimeOuncesAverage(idNum) {
        const hydrationDataForUser = this.getHydrationDataForUser(idNum);
        let averageUserHydration = hydrationDataForUser.reduce((acc, cur) => {
            acc += cur.numOunces
            return acc;
        }, 0);
        return averageUserHydration / hydrationDataForUser.length;
    };

    getUserHydrationForDay(idNum, date) {
        const userHydrationDate = this.hydrationData.find((userHydrationData) => {
            return userHydrationData.userID === idNum && userHydrationData.date === date;
        });
        return userHydrationDate.numOunces;
    };

    getUserHydrationPerWeek(id, dateParam) {
        const userData = this.getHydrationDataForUser(id);
        const endDateIndex = userData.findIndex((date) => {
            return date.date === dateParam;
        });
        const weeklyRange = userData.slice(endDateIndex - 6, 7);
        console.log('weeklyRange inside class: ', weeklyRange);
        const weeklyHydration = weeklyRange.map((date) => {
            return {[date.date]: date.numOunces};
        });
        return weeklyHydration;
    };
};
export default HydrationRepository;