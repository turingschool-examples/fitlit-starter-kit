const activityData = require(../data/activity)

class CommunityActivity {
  constructor(activity) {
    this.activities = activity.map(activity => new Activity())
  }

  dateToNumber(date) {
    return parseInt(date.split('/').join(''))
  }

  findAverage(startDate, endDate, fitnessThing) {
    const startNum = dateToNumber(startDate)
    const endNum = dateToNumber(endDate)

    const activitiesDuringThisTimePeriod = this.activities.filter(activities => {
      const activityDateNum = dateToNumber(activities.date)
      return activityDateNum >= startDate && activityDateNum <= endDate
    })

    const totalActivity = activitiesDuringThisTimePeriod.reduce((activityTotal, activity) => activityTotal + activity[fitnessThing], 0)

    return totalActivity / activitiesDuringThisTimePeriod.length
}

  findAverageStairs(date) {

  }

  findAverageActiveMinutes(date) {

  }
}



module.exports = CommunityActivity
