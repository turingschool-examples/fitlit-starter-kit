import Sleep from '../src/Sleep';

class SleepRepository{
    constructor(data) {
        this.users = data.map((userObj) => { return new Sleep(userObj) });
    }

    averageSleepQualityPerDay(id) {
        const userSleep = this.users.filter((user) => {
            return user.id === id;
        })
        const average = userSleep.reduce((sum, person) => {
            sum += person.sleepQuality
            return sum
        }, 0)
        const number = (average/userSleep.length).toFixed(1);
        return parseFloat(number)
    }

    // displayDailyAvgSleep(id, date) {
    //     const userSleep = this.users.filter((user) => {
    //         return user.id === id;
    //     })
    //     const userSleepByDay = userSleep.find((user) => {
    //         return user.date === date;
    //     }).ounces
    //     return userSleepByDay;
    // }
    
}




export default SleepRepository;

// For a user, how many hours they slept for a specific day (identified by a date)
// For a user, their sleep quality for a specific day (identified by a date)
// For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
// For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
// For all users, the average sleep quality