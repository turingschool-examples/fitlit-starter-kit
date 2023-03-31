import * as dayjs from 'dayjs'

class Activity {
  constructor(data, stride){
    this.data = data
    .map((activity) => {
      activity.date = dayjs(activity.date, 'YYYY/MM/DD')
      .format('YYYY/MM/DD')
      return activity
    })
    this.userStride = stride
  }

  getMinutesActive(date) {
    return this.data.find(activity => activity.date === date).minutesActive
  }

  getStepCount(date) {
    return this.data.find(activity => activity.date === date).numSteps
  }

  calculateMiles(date) {
    return parseFloat(((this.getStepCount(date) * this.userStride) / 5280).toFixed(2))
  }

  getLatestWeek() {
    return this.data.map(activity => activity.numSteps).slice(0,7)
  }

}

export default Activity