function getAverageFluidOunce(userID, hydrationData) {
  let count = 0;
  let totalOunces = hydrationData.reduce((total, hydrate) => {
    if (hydrate.userID === userID) {
      total += hydrate.numOunces;
      count++;
      return total;
    }
  }, 0);
  return Math.round(totalOunces / count);
}

function getFluidOunceForDay(userID, hydrationData, date) {
  let foundHydrationData = hydrationData.find((data) => {
    return data.userID === userID && data.date === date;
  });
  return foundHydrationData;
}

function getFluidOunceForWeek(userID, hydrationData) {
  const usersWeekHydration = hydrationData.reduce((usersHydration, data) => {
    if (data.userID === userID) {
      usersHydration.push({
        date: data.date,
        ounces: data.numOunces,
      });
    }
    return usersHydration;
  }, []);
  return usersWeekHydration;
}

export {
  getAverageFluidOunce,
  getFluidOunceForDay,
  getFluidOunceForWeek
};