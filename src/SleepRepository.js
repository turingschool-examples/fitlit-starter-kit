import Sleep from '../src/Sleep';

class SleepRepository{
    constructor(data) {
        this.users = data.map((userObj) => { return new Sleep(userObj) });
    }

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

    displayDailySleepHours(id, date) {
        const userSleep = this.users.filter((user) => {
            return user.id === id;
        })
        const userSleepByDay = userSleep.find((user) => {
            return user.date === date;
        }).hoursSlept
        return userSleepByDay;
    }

    displaySleepQualityByDate(id, date) {
        const userSleep = this.users.filter((user) => {
            return user.id === id;
        })
        const userSleepQualityByDay = userSleep.find((user) => {
            return user.date === date;
        }).sleepQuality
        return userSleepQualityByDay;
    }

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
        if(chart != null){
            chart.destroy()
        }
        var barColors = ['gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray'];
        var barColors2 = ['black', 'black', 'black', 'black', 'black', 'black', 'black'];
        const data = {
            labels: date,
            datasets: [{
                label: 'Sleep Hours',
                borderColor: 'rgba(255, 0, 0, 0.9)',
                backgroundColor: barColors,
                data: Shours
            },
            {
                label: 'Sleep Quality',
                borderColor: 'rgba(255, 0, 0, 0.5)',
                backgroundColor: barColors2,
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
        var chart = new Chart("sleep-chart", config) 
    }
};
    



export default SleepRepository;