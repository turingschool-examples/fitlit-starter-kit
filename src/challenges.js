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

  addUserToFriends(dataSet, startDate, attribute) {
    let user = this.getUserData();
    let friends = this.findFriends();
    friends.push(user)
    let finalObj = friends.map((obj) => {
      return  {
        id: obj.id,
        name: obj.name,
        strideLength: obj.strideLength,
        weekData: this.findFriendWeek(dataSet, startDate, obj.id, attribute)
      }
    })
    
    return finalObj
  }
  findFriendData(dataSet, startDate) {
    let friendObjects = this.addUserToFriends(dataSet, startDate);
    return friendObjects
  }

  findFriendWeek(dataSet, startDate, id, attribute) {
    let oneFriendDates = dataSet.filter(friend => id === friend.userID);
    let startIndex = oneFriendDates.findIndex(day => day.date === startDate)
    let friendWeek = oneFriendDates.slice(startIndex, startIndex + 7)
    return friendWeek.map(friend => friend[attribute]);
  }


}

if (typeof module !== 'undefined') {
  module.exports = Challenges;
}
