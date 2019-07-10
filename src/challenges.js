class Challenges {
  constructor(data, id) {
    this.data = data;
    this.id = id

  }
  getUserData() {
    return this.data.find(user => user.id === this.id)
  }
  findFriends() {
    let userObject = this.getUserData();
    let friendIds = userObject.friends
    return this.data.reduce((acc, user) => {
      friendIds.forEach(id => {
        if ( id === user.id) {
          acc.push(user)
        }
      })
      return acc
    }, [])
  }

  addUserToFriends(dataSet, startDate) {
    let user = this.getUserData();
    let friends = this.findFriends();
    friends.push(user)
    let test = friends.map((obj) => {
      return  {
        id: obj.id,
        name: obj.name,
        strideLength: obj.strideLength,
        weekData: this.findFriendWeek(dataSet, startDate, obj.id)
      }
    })
    return test
  }
  findFriendData(dataSet, startDate) {
    let friendObjects = this.addUserToFriends(dataSet, startDate);
    return friendObjects
  }

  findFriendWeek(dataSet, startDate, id) {
    let oneFriendDates = dataSet.filter(friend => id === friend.userID);
    let startIndex = oneFriendDates.findIndex(day => day.date === startDate)
    let friendWeek = oneFriendDates.slice(startIndex, startIndex + 7)
    return friendWeek
  }

  friendWeekInfo() {

    return {
      id: 1,
      name: 'chris',
      strideLength: 4.3,
      weekData: [
        {
          userID: 1,
          date: '2019/06/21',
          numSteps: 6760,
          minutesActive: 135,
          flightsOfStairs: 6
        },
        {
          userID: 1,
          date: '2019/06/22',
          numSteps: 10289,
          minutesActive: 119,
          flightsOfStairs: 6
        }
      ]
    }
  }



}

if (typeof module !== 'undefined') {
  module.exports = Challenges;
}
