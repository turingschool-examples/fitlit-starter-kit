const chai = require("chai");
const expect = chai.expect;


const Hydration = require("../src/Hydration");

describe("hydration", () => {
  let hydration;
  let user;
  let userRepo;

  beforeEach(() => {
    hydration = new Hydration(1);
    user = new User(4); 
    userRepo = new UserRepo();
  });

  it.only("should be a function", () => {
    expect(Hydration).to.be.a("function");
  });

  it.only("should be an instance of Hydration", () => {
    expect(hydration).to.be.a.instanceOf(Hydration);
  });
});
