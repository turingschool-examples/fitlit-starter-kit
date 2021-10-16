class UserRepository {
  constructor(user){
    this.users = [];
    this.users.push(user);
  };
  showData(id){
    return this.users.find((user) => {return user.id === id})
  };
  calculateAvgStepGoal(){
  const goals = this.users.map((user) => {return user.dailyStepGoal});
  const average = goals.reduce((a,b) => a+b, 0) / goals.length;
  return average
  };
};

export default UserRepository;
