class UserRepository {
  constructor(data) {
    this.allData = data;
  }

  dataByID(idInput) {
    const output = this.allData.find(data => {
      if (data.id === idInput) {
      return data;
      }
    });
    return output;
  }

  averageStepGoal() {
    const output = this.allData.reduce((acc, curr) => {
      return (acc.dailyStepGoal + curr.dailyStepGoal);
    });
    return (output/this.allData.length);
  }

  averageStepGoal() {
    const output = this.allData.map(data => data.dailyStepGoal).reduce((acc, curr) =>  (acc + curr));
    return (output/this.allData.length);
  }

}

export default UserRepository;
