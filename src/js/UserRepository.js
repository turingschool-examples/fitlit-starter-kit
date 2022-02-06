import User from './User';

class UserRepository {
  constructor(users) {
    this.users = users.reduce((acc, user) => {
      return [...acc, new User(user)];
    }, []);
  };

  getUser(id) {
    return this.users.find(user => user.id === id);
  };

  averageStepGoal() {
    return this.users.reduce((acc, user) => {
      acc += user.dailyStepGoal;
      return acc;
    }, 0) / this.users.length;
  };
};

export default UserRepository;
