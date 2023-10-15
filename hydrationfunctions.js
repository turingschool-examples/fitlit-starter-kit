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

describe('averageFluidOuncesPerDay', () => {
    it('should calculate average fluid ounces per day', () => {
      const hydratedUsers = [
        { userID: 1, numOunces: 20 },
        { userID: 2, numOunces: 30 },
        { userID: 1, numOunces: 40 },
      ];
  
      const averages = averageFluidOuncesPerDay(hydratedUsers);
  
      expect(averages[1]).to.equal(30);
    });
  });
  
describe('fluidOuncesForDay', () => {
    it('should return the fluid ounces consumed for a specific day', () => {
      const hydratedUsers = [
        { userID: 1, date: '2023/03/24', numOunces: 28 },
        { userID: 2, date: '2023/03/24', numOunces: 35 },
        { userID: 3, date: '2023/03/25', numOunces: 50 },
      ];
  
      const userId = 2;
      const specificDate = '2023/03/24';
      const ouncesConsumed = fluidOuncesForDay(hydratedUsers, userId, specificDate);
  
      expect(ouncesConsumed).to.equal(35);
    });
});
  
describe('fluidOuncesPerWeek', () => {
    it('should calculate fluid ounces consumed over a week', () => {
      const hydratedUsers = [
        { userID: 1, date: '2023/03/24', numOunces: 28 },
        { userID: 2, date: '2023/03/25', numOunces: 35 },
        { userID: 1, date: '2023/03/26', numOunces: 40 },
      ];
  
      const userId = 1;
      const weekStartDate = '2023/03/24';
      const ouncesPerWeek = fluidOuncesPerWeek(hydratedUsers, userId, weekStartDate);
  
      expect(ouncesPerWeek['2023/03/24']).to.equal(28);
    });
});