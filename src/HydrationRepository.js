class HydrationRepository {
    constructor(data) {
        this.hydrationData = data;
    };

    getHydrationDataForUser(idNum) {
        const hydrationDataForUser = this.hydrationData.filter((user) => {
            return user.userID === idNum;
        });
        return hydrationDataForUser;
    };

    getAllTimeOuncesAverage(idNum) {
        const hydrationDataForUser = this.getHydrationDataForUser(idNum);
        let averageUserHydration = hydrationDataForUser.reduce((user, cur) => {
            user += cur.numOunces
            return user;
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
        const weeklyRange = userData.slice(endDateIndex - 6, endDateIndex + 1);
        const weeklyHydration = weeklyRange.map((date) => {
            return {
                date: date.date,
                ounces: date.numOunces
            };
        });
        return weeklyHydration;
    };
};
export default HydrationRepository;