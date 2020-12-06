class UserRepository {
  constructor(data) { // It should have a parameter to take in user data
    this.data = data;
  }

  returnUserData() {
    
  }

  calculateAverageStepGoal() { // The average step goal amongst all users
    // userData.dailyStepGoal.reduce(acc, sum) => return acc + sum / userData.length;
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
