import Sleep from '../src/Sleep';

class SleepRepository{
    constructor(data) {
        this.users = data.map((userObj) => { return new Sleep(userObj) });
    }

// For a user (identified by their userID), the average number of hours slept per day
    displayUserHoursSleepAllTime(id) {
        const userSleep = this.users.filter((user) => {
            return user.id === id;
        })
        const average = userSleep.reduce((sum, person) => {
            sum += person.hoursSlept
            return sum
        }, 0)
        const number = (average/userSleep.length).toFixed(1);
        return parseFloat(number)
    }

// For a user, their average sleep quality per day over all time
    displayUserSleepQualityAllTime(id) {
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

// For a user, how many hours they slept for a specific day (identified by a date)
    displayDailySleepHours(id, date) {
        const userSleep = this.users.filter((user) => {
            return user.id === id;
        })
        const userSleepByDay = userSleep.find((user) => {
            return user.date === date;
        }).hoursSlept
        return userSleepByDay;
    }

// For a user, their sleep quality for a specific day (identified by a date)
    displaySleepQualityByDate(id, date) {
        const userSleep = this.users.filter((user) => {
            return user.id === id;
        })
        const userSleepQualityByDay = userSleep.find((user) => {
            return user.date === date;
        }).sleepQuality
        return userSleepQualityByDay;
    }

// For a user, how many hours slept each day over the course of a given week (7 days) -
// you should be able to calculate this for any week, not just the latest week
    displayWeekSleepHours(id, date) {
        const dateSleepHours = this.users.filter((user) => {
            return user.id === id;
        });
        const index = dateSleepHours.findIndex(data => {
            return data.date === date
        })
        const weekDate = dateSleepHours.slice((index - 6) , (index + 1))
        .map(data => {
            return data.hoursSlept
        })
        return weekDate;
    }

// For a user, their sleep quality each day over the course of a given week (7 days) -
// you should be able to calculate this for any week, not just the latest week
    displayWeekSleepQualityHours(id, date) {
        const dateSleepQualityHours = this.users.filter((user) => {
            return user.id === id;
        });
        const index = dateSleepQualityHours.findIndex(data => {
            return data.date === date
        })
        const weekDate = dateSleepQualityHours.slice((index - 6) , (index + 1))
        .map(data => {
            return data.sleepQuality
        })
        return weekDate;
    }

// For all users, the average sleep quality
    displayAverageSleepQualityAllUser() {
        const average = this.users.reduce((sum, person) => {
            sum += person.sleepQuality
            return sum
        }, 0)
        const number = (average/this.users.length).toFixed(1);
        return parseFloat(number)
    }

    displaySleepWeek(id, date) {
        const dateSleep = this.users.filter((user) => {
            return user.id === id;
        });
        const index = dateSleep.findIndex(data => {
            return data.date === date
          })
        const weekDate = dateSleep.slice((index - 6) , (index + 1))
          .map(data => {
            return data.date
          })
        return weekDate;
    }

    displayWeeklySleepChart(date, Shours, SQhours) {
        var barColors = ["red", "green", "blue", "orange","brown", "black", "magenta"];
        const data = {
            labels: date,
            datasets: [{
                label: 'Sleep Hours',
                borderColor: 'rgba(255, 0, 0, 0.7)',
                backgroundColor: barColors,
                data: Shours
            },
            {
                label: 'Sleep Quality',
                borderColor: 'rgba(255, 0, 0, 0.7)',
                backgroundColor: barColors,
                data: SQhours
            }]
        }
        const config = {
            type: 'bar',
            data: data,
            options: {
                SQhours, 
                Shours,
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Sleep Hours & Sleep Quality Per Day'
                }
            }
        }
        new Chart("sleep-chart", config) 
                
    }
};
    



export default SleepRepository;