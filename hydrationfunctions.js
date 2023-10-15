function averageFluidOuncesPerDay(hydratedUsers) {
    const userTotals = {}; 
    const userCounts = {}; 
  
    hydratedUsers.forEach(hUser => {
      const userId = hUser.userID;
      const ounces = huser.numOunces;
  
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

function fluidOuncesPerWeek(hydratedUsers, userId, startDate) {
    const ouncesPerDay = {};
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);
  
    hydratedUsers.forEach(entry => {
      const entryDate = new Date(entry.date);
      if (entry.userID === userId && entryDate >= new Date(startDate) && entryDate <= endDate) {
        const day = entry.date;
        ouncesPerDay[day] = (ouncesPerDay[day] || 0) + entry.numOunces;
      }
    });
  
    return ouncesPerDay;
}

