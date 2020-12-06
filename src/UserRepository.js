class UserRepository {
  constructor(data) {
    this.data = data;
  }

  returnUserData(userId) {
    return this.data.find(user => user.id === userId);
  }

  calculateAverageStepGoal() {
    const totalStepGoal = this.data.reduce((acc, user) => {
      return acc + user.dailyStepGoal;
    }, 0);
    return Math.floor(totalStepGoal / this.data.length);
  }

}



// UserRepository class
// new UserRepository(data);
// A UserRepository holds onto all of the User objects
//
//
// const cards = prototypeQuestions.map(cardIndex => {
//   const card = new Card(cardIndex.id, cardIndex.question, cardIndex.answers, cardIndex.correctAnswer);
//   return card;
// });

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
