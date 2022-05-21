class SleepRepository {
    constructor(data) {
        this.sleepData = data;
    }
    getSleepDataForUser(idNum) {
        const sleepDataForUser = this.sleepData.filter((obje) => {
            if (obje.userID === idNum) {
              return obje
            }
        });
        return sleepDataForUser

    };
   
}








export default SleepRepository;