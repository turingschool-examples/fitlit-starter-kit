class User {
    constructor(userData){
        this.id= userData.id
        this.name= userData.name
        this.address= userData.address
        this.email= userData.email
        this.strideLength= userData.strideLength
        this.dailyStepGoal= userData.dailyStepGoal
        this.friends= userData.friends
    }
    
    getFirstName(){
        let firstName = this.name.split(" ")
        return firstName[0]
    }

    //can be used for a specific users sleep quality or hours slept for a specific day
    getSleepDataPerDay(sleepData, date, detail) {
        const usersData = sleepData.filter(entry => entry.userID === this.id)
        const entry = usersData.find(entry => entry.date === date)
        return entry[detail]
    }

    //get average number of hours slept per day and average sleep quality
    getAvgSleepDataPerDay(sleepData, detail) {
        const usersData = sleepData.filter(entry => entry.userID === this.id)
        if(usersData.length === 0) {
            return 0
        }
        const totalSleepData = usersData.reduce((total, entry) => {
           total += entry[detail]
            return total
        }, 0)
        const average = (totalSleepData/usersData.length).toFixed(1)
        return parseFloat(average)
    }

    



}

module.exports = User;
