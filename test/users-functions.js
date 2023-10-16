export { getUserFromId, averageStepGoals }


const getUserFromId = (num, array) => {
  return array.find(array => array.id === num);
};

const averageStepGoals = (users) => {
  return (
    users.reduce((acc, curr) => (acc += curr.dailyStepGoal), 0) / users.length
  );
};
