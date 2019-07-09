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
  getWeeklySteps(dataSet, date, idArr) {
  //  console.log(dataSet);
  //  console.log(date);
  //  console.log(idArr);
   
    let test = idArr.map(friend => {
      let arr = dataSet.filter(user => 
        user.userID === friend.id
      )
      return arr
    })
    let testMap = test.map((array) => {
       return array.find(obj => {
         return obj.date === date
      })
    })
    return testMap.forEach(el => {
      let index = dataSet.findIndex(obj => {
        el.date === obj.date && el.userID === obj.userID})
        console.log(index);
      var week = this.object.slice(index - 6, index + 1).reverse()
    })
  }


}

if (typeof module !== 'undefined') {
  module.exports = Challenges;
}
