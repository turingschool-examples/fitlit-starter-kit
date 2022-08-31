class Sleep {
    constructor(sleepData) {
        this.userID = sleepData.userID
        this.date = sleepData.date
        this.hoursSlept = sleepData.hoursSlept
        this.sleepQuality = sleepData.sleepQuality
    }

    findAverageSleepHoursPerDay() {
        // sleep 

        const avgHours = this.sleepData.reduce((acc, element) => {
            if (user.id === userID) {
                acc += element
            }
            return acc
        }, 0) 
        return avgHours 
    }
 
        // we are going to look at hoursSlept 
        // the average number of hours slept per day
        // filter userID === userID push hours into an array
        

    // findAverageSleepQuality() {
        // average sleep quality per day over time

    // }

    // findHoursSleptForDay() {


    // }

    // findSleepQualityForDay() {

    // }

    // findHoursSleptPerDay() {
        // over the course of 7 days


    // }


    // findSleepQualityPerDay() {
    //     over the course of 7 days
    // }

    // findAllUsersAverageSleepQuality() {

    // }
}

export default Sleep;
