const Activity = require('./activity')

class CommunityActivity {
  constructor(activity) {
    this.activities = activity.map(activity => new Activity(activity))
  }

  findUserActivityByDate(date, user) {
    const activity = this.activities.filter(activity => activity.date === date && activity.userID === user.userID)[0]
    return activity
  }

  findAllUserActivities(user) {
    return this.activities.filter(activity => activity.userID === user.userID)
  }

  findUserStepMiles(date, user) {
    const activity = this.findUserActivityByDate(date, user)
    return activity.getStepMiles(user)
  }

  hasUserMetStepGoal(date, user) {
    const activity = this.findUserActivityByDate(date, user)
    return activity.verifyIfStepGoal(user)
  }

  findUserActivityMinutes(date, user) {
    const activity = this.findUserActivityByDate(date, user)
    return activity.minutesActive

  }

  daysExceedingStepGoal(user) {
    const userActivities = this.findAllUserActivities(user)
    return userActivities.filter(activity => activity.verifyIfStepGoal(user))
  }

  findRecordStairs(user) {
    const userActivities = this.findAllUserActivities(user)
    const allStairsClimbed = userActivities.map(activity => activity.stairsClimbed)
    return Math.max(...allStairsClimbed)
  }

  dateToNumber(date) {
    return parseInt(date.split('/').join(''))
  }

  findWeekActiveMinutesAverage(startDate, endDate, user) {
    const startNum = this.dateToNumber(startDate)
    const endNum = this.dateToNumber(endDate)

    const userActivities = this.findAllUserActivities(user)

    const activitiesDuringThisTimePeriod = userActivities.filter(activity => {
      const activityDateNum = this.dateToNumber(activity.date)
      return activityDateNum >= startNum && activityDateNum <= endNum
    })

    const totalMinutes = activitiesDuringThisTimePeriod.reduce((minutesTotal, activity) => minutesTotal + activity.minutesActive, 0)

    return Math.round(totalMinutes / activitiesDuringThisTimePeriod.length)
}

  findCommunityAverage(date, fitnessType) {
    const allActivitesForDate = this.activities.filter(activity => activity.date === date)
    const totalActivity = allActivitesForDate.reduce((activityTotal, activity) => activityTotal + activity[fitnessType], 0)

    return Math.round(totalActivity / allActivitesForDate.length)
  }
}



module.exports = CommunityActivity
