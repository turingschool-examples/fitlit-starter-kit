class UserActivity{
    constructor(UserActivityData){
        this.userId = UserActivityData.userId
        this.date = UserActivityData.date
        this.minutesActive = UserActivityData.minutesActive
        this.flightsOfStairs = UserActivityData.flightsOfStairs
    }
}
module.exports = UserActivity;