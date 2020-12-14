const chai = require('chai');
const expect = chai.expect;

const Sleep = ('../src/Sleep');
describe('Sleep', () => {
  let sleep1, sleep2, sleep3;

  beforeEach(() => {

    sleep1 = new Sleep({"userID": 1, "date": "2019/06/15", "hoursSlept": 6.1, "sleepQuality": 2.2});
    sleep2 = new Sleep({"userID": 17, "date": "2019/08/14", "hoursSlept": 9.7, "sleepQuality": 3.6});
    sleep3 = new Sleep({"userID": 48, "date": "2019/09/15", "hoursSlept": 4.5, "sleepQuality": 1.2});
  })

  it('should have a userID property', () => {
    expect(sleep1.userID).to.equal(1);
    expect(sleep2.userID).to.equal(17);
    expect(sleep3.userID).to.equal(48);
  });
  it('should include a date as a property', () => {
    expect(sleep1.date).to.equal("2019/06/15");
    expect(sleep2.date).to.equal("2019/08/14");
    expect(sleep3.date).to.equal("2019/09/15");
  })
  it('should have a property that states the number of hours slept', () => {
    expect(sleep1.hoursSlept).to.equal(6.1);
    expect(sleep2.hoursSlept).to.equal(9.7);
    expect(sleep3.hoursSlept).to.equal(4.5);
  })
  it('should have a property that states the quality of sleep as a number', () => {
    expect(sleep1.sleepQuality).to.equal(2.2);
    expect(sleep2.sleepQuality).to.equal(3.6);
    expect(sleep3.sleepQuality).to.equal(1.2);
  })

})
