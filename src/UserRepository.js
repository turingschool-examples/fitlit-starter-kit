class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }

  findUserData(id) {
    const singleUserData = this.userData.find(user => user.id === id);
    return singleUserData;
  };

  getAllUserAvgStepGoals(){
    const totalStepGoals = this.userData.reduce((totalSteps, user) => {
      totalSteps += user.dailyStepGoal / this.userData.length
      return totalSteps
    }, 0);

    return Math.floor(totalStepGoals)
  }


  // convertFriendIdToName(id) {
  //   const user = this.userData(id)
  //
  //   const friendsArray = []
  //     console.log('hello',user)
  //         user.friends.forEach(friend => {
  //           console.log('friend', friend)
  //           const matchingIds = this.userData.filter(user => {
  //             return user.id === friend;
  //           })
  //          matchingIds.forEach(user =>  friendsArray.push(user.name))
  //
  //         })
  //         console.log('array', friendsArray)
  //         return friendsArray.join('<br>')
  //
  //   }

}

export default UserRepository;
