const chai = require("chai");
const expect = chai.expect;

const HydrationRepository = require("../src/hydrationRepository");
const fakeHydration = require("../data/fakeHydration");

let hydrationRepository;
let allHydration;
let user16;

describe("Hydration Repository", () => {

  beforeEach(() => {
    hydrationRepository = new HydrationRepository(fakeHydration);
    allHydration = [
      { userID: 1, date: '2019/06/15', numOunces: 37 },
      { userID: 1, date: '2019/06/15', numOunces: 37 },
      { userID: 1, date: '2019/06/16', numOunces: 69 },
      { userID: 1, date: '2019/06/17', numOunces: 96 },
      { userID: 1, date: '2019/06/18', numOunces: 61 },
      { userID: 1, date: '2019/06/19', numOunces: 91 },
      { userID: 1, date: '2019/06/20', numOunces: 50 },
      { userID: 1, date: '2019/06/21', numOunces: 50 },
      { userID: 4, date: '2019/06/15', numOunces: 85 },
      { userID: 4, date: '2019/06/16', numOunces: 95 },
      { userID: 4, date: '2019/06/17', numOunces: 82 },
      { userID: 4, date: '2019/06/18', numOunces: 93 },
      { userID: 4, date: '2019/06/19', numOunces: 21 },
      { userID: 4, date: '2019/06/20', numOunces: 95 },
      { userID: 4, date: '2019/06/21', numOunces: 91 },
      { userID: 8, date: '2019/06/15', numOunces: 84 },
      { userID: 8, date: '2019/06/16', numOunces: 26 },
      { userID: 8, date: '2019/06/17', numOunces: 47 },
      { userID: 8, date: '2019/06/18', numOunces: 90 },
      { userID: 8, date: '2019/06/19', numOunces: 79 },
      { userID: 8, date: '2019/06/20', numOunces: 89 },
      { userID: 8, date: '2019/06/21', numOunces: 37 },
      { userID: 16, date: '2019/06/15', numOunces: 40 },
      { userID: 16, date: '2019/06/16', numOunces: 55 },
      { userID: 16, date: '2019/06/17', numOunces: 68 },
      { userID: 16, date: '2019/06/18', numOunces: 53 },
      { userID: 16, date: '2019/06/19', numOunces: 41 },
      { userID: 16, date: '2019/06/20', numOunces: 53 },
      { userID: 16, date: '2019/06/21', numOunces: 61 }
    ];

    user16 = [
    { userID: 16, date: '2019/06/15', numOunces: 40 },
    { userID: 16, date: '2019/06/16', numOunces: 55 },
    { userID: 16, date: '2019/06/17', numOunces: 68 },
    { userID: 16, date: '2019/06/18', numOunces: 53 },
    { userID: 16, date: '2019/06/19', numOunces: 41 },
    { userID: 16, date: '2019/06/20', numOunces: 53 },
    { userID: 16, date: '2019/06/21', numOunces: 61 }]
  });

  it("should be a function", () => {
    expect(HydrationRepository).to.be.a('function');
  });

  it("should have hydration information for all users", () => {
    expect(hydrationRepository.hydrationInformation).to.eql(allHydration);
  });

  it("should be able to get a user", () => {
    expect(hydrationRepository.getUserById(16)).to.eql(user16)
  });

});