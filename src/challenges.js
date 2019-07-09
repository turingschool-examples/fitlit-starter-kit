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

  addUserToFriends() {
    let user = this.getUserData();
    let friends = this.findFriends();
    friends.push(user)
    let test = friends.map(obj => {
      return  {
        'id': obj.id,
        'name': obj.name,
        'strideLength': obj.strideLength
      }
    })
    return test
  }

  findActiveWeek(dataSet) {
    let friendObjects = this.addUserToFriends();
      
    

  }


  


}

if (typeof module !== 'undefined') {
  module.exports = Challenges;
}
