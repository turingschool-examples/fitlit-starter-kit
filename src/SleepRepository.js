class SleepRepository {
  constructor(dataset, id) {
    this.dataset = dataset;
    this.id = id;
    this.userSleep = this.findSleepUser();
  }

  findSleepUser(dataset = this.dataset, id = this.id) {
    return dataset.filter(user => user.userID === id)
  }

  findUserSleepAverage() {
    let average = (this.userSleep.reduce((hours, user) =>
      hours + user.hoursSlept, 0)/this.userSleep.length).toFixed(1);
    return parseFloat(average);
  }

  findUserSleepQualityAverage(arr = this.userSleep) {
    let average = (arr.reduce((hours, user) =>
      hours + user.sleepQuality, 0)/arr.length).toFixed(1);
    return parseFloat(average); 
  }

  findSleepQualityAverage() {
    let average = (this.dataset.reduce((hours, user) =>
      hours + user.sleepQuality, 0)/this.dataset.length).toFixed(1);
    return parseFloat(average);
  }

  findSleepQualityGreaterThanThree(startDate, endDate) {
    let week = this.dataset.filter(day =>
      day.date >= startDate && day.date <= endDate);
    let obj ={};
    week.forEach(user => {
      if(!obj[user.userID]) {
        obj[user.userID]
        }
        obj[user.userID] = this.findUserSleepQualityAverage(this.findSleepUser(week,user.userID))
      });
    let prelimArray = Object.keys(obj).map((el, i) => [el, Object.values(obj)[i]])
    let answer = [];
    prelimArray.forEach(arr => {
      if (arr[1] >= 3) {
        answer.push(parseInt(arr[0]))
      } 
    })
    return answer;
  }

  findMostSleep(date) {
    let day = this.dataset.filter(day =>
      day.date === date);
    let hours = day.map(user => user.hoursSlept);
    let user = day.filter(user => 
      user.hoursSlept === Math.max(...hours));
    return user.map(user => user.userID);
  }

  findSleepHoursAverage() {
    let average = (this.dataset.reduce((hours, user) =>
      hours + user.hoursSlept, 0)/this.dataset.length).toFixed(1);
    return parseFloat(average);
  }



}


if (typeof module !== 'undefined') {
    module.exports = SleepRepository;
};