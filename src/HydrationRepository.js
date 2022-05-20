class HydrationRepository {
    constructor(data) {
        this.hydrationData = data;
    }

    getHydrationDataForUser(idNum) {
        const hydrationDataForUser = this.hydrationData.filter((obj) => {
            return obj.userID === idNum;
        })
        return hydrationDataForUser;
    }

    getAllTimeOuncesAverage(idNum) {
        const hydrationDataForUser = this.getHydrationDataForUser(idNum);
        let averageUserHydration = hydrationDataForUser.reduce((acc, cur) => {
            acc += cur.numOunces
            return acc;
        }, 0)
        return averageUserHydration / hydrationDataForUser.length;
    }
}
export default HydrationRepository;