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

    getSleepDataPerDay(sleepData, date, detail) {
        const usersData = sleepData.filter(entry => entry.userID === this.id)
        const entry = usersData.find(entry => entry.date === date)
        return entry[detail]
    }

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

  calAverageFluid(fuildsData) {
    const userFuildsInfo = fuildsData.filter((user) => user.userID === this.id);
    const average = userFuildsInfo.reduce((acc, fuild) => {
      acc += fuild.numOunces;
      return acc;
    }, 0);
    return average;
  }

  getDayFluid(data, date) {
    const userDayFuilds = data.filter(
      (day) => day.date === date && day.userID === this.id
    );
    const sum = userDayFuilds.reduce((acc, fuilds) => {
      acc += fuilds.numOunces;

      return acc;
    }, 0);

    return sum;
  }

  getWeeklyFluids(data) {
    const userInfo = data.filter((data) => data.userID === this.id);
    const userDates = userInfo.map((dates) => {
      return { date: dates.date, numOunces: dates.numOunces };
    });

    return userDates;
  }
 } 

module.exports = User;
