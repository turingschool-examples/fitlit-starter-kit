import * as dayjs from 'dayjs'

class Activity {
  constructor(data, stride){
    this.data = data
    .map((activity) => {
      activity.date = dayjs(activity.date, 'YYYY/MM/DD')
      console.log('setting activity: ', activity)
      return activity
    })
    this.currentDate = this.data.sort()
    this.userStride = stride
  }

  getMinutesActive(date) {
    return this.data.find(activity => activity.date === date).minutesActive
  }

  getStepCount() {
    const sorted = this.data.sort((a, b) => a.date - b.date)
    console.log('this shit: ', sorted.reverse()[0])
    return sorted.reverse()[0].numSteps
    // return this.data.find(activity => activity.date === date).numSteps
      // **the above commented out code is the original method**
  }

  calculateMiles(date) {
    return parseFloat(((this.getStepCount(date) * this.userStride) / 5280).toFixed(2))
  }

  getLatestWeek() {
    return this.data.map(activity => activity.numSteps).slice(0,7)
  }

  sortData() {
    this.data = this.data
      .sort((a,b) => a.date - b.date)
    this.data.map((activity) => {
      activity.date = dayjs(activity.date, 'YYYY/MM/D').format('YYYY/MM/DD')
      return activity
    })
  }

}

export default Activity