function averageFluidOuncesPerDay(hydratedUsers) {
    const userTotals = {}; 
    const userCounts = {}; 
  
    hydratedUsers.forEach(hUser => {
      const userId = hUser.userID;
      const ounces = hUser.numOunces;
  
      userTotals[userId] = userTotals[userId] + ounces;
      userCounts[userId] = userCounts[userId] + 1;
    });
  
    const averages = {};
    Object.keys(userTotals).forEach(userId => {
      averages[userId] = userTotals[userId] / userCounts[userId];
    });
  
    return averages;
  }

function fluidOuncesForDay(hydratedUsers, userId, date) {
    const entry = hydratedUsers.find(item => item.userID === userId && item.date === date);
    return entry ? entry.numOunces : 0;
}

const give7DayWaterConsumption = (array, id, theDate) => {
  let arr = [];

  const user = array.filter((person) => person.userID === id);

  const index = user.findIndex((element) => element.date === theDate);

  for (let i = index; i < index + 7; i++) {
    arr.push(user[i]);
  }
  return arr.map((item) => `On ${item.date} you consumed ${item.numOunces}`);
};


export { 
  averageFluidOuncesPerDay, 
  fluidOuncesForDay, 
  give7DayWaterConsumption 
};
