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