import { expect } from "chai";
import Hydration from "../src/Hydration";
import hydrationData from "../src/data/hydration";

describe("Hydration", function () {
  let data;
  let userHydrate;
  beforeEach(() => {
    data = hydrationData;
    userHydrate = new Hydration(data);
  });

  it("Should be a function", function () {
    expect(Hydration).to.be.a("function");
  });

  it("Should be an instance of User", function () {
    expect(userHydrate).to.be.an.instanceof(Hydration);
  });

  it("Should have a property that hold hydration data", function () {
    expect(userHydrate.data).to.deep.equal(data);
  });

  it('should return true if ID found', function() {
    expect(userHydrate.checkID(1)).to.equal(true)
  })

  it('should return false if ID not found', function() {
    expect(userHydrate.checkID(87)).to.equal(false)
  })

  it("Should track average ounces of water consumed per day for all time", function () {
    expect(userHydrate.calcAvgWaterConsumption(1)).to.equal(67);
  });

  it('Should return error message if user does not exist in calcAvgWaterConsumption', function () {
    expect(userHydrate.calcAvgWaterConsumption(87)).to.equal('User Not Found');
  })

  it("Should have water consumed by date", function () {
    expect(userHydrate.consumeBydate(1, "2019/06/15")).to.equal(37);
  });

  it('Should return error message if user does not exist in consumeByDate', function () {
    expect(userHydrate.consumeBydate(87, "2019/06/15")).to.equal('User Not Found');
  })

  it('Should return error message if user does not exist in consumeByDate', function () {
    expect(userHydrate.consumeBydate(1, "2018/06/10")).to.equal('No data found for date selected');
  })


  it("Should be able to calculate water each day over a week", function () {
    expect(
      userHydrate.returnWeeklyWaterConsumption(1, "2019/06/15")
    ).to.deep.equal({
      count: [37, 75, 47, 85, 42, 87, 94],
      label: "Water Consumption",
      dates: [
        "2019/06/15",
        "2019/06/16",
        "2019/06/17",
        "2019/06/18",
        "2019/06/19",
        "2019/06/20",
        "2019/06/21",
      ],
    });
    expect(
      userHydrate.returnWeeklyWaterConsumption(1, "2019/06/21")
    ).to.deep.equal({
      count: [37, 75, 47, 85, 42, 87, 94],
      label: "Water Consumption",
      dates: [
        "2019/06/15",
        "2019/06/16",
        "2019/06/17",
        "2019/06/18",
        "2019/06/19",
        "2019/06/20",
        "2019/06/21",
      ],
    });
  });

  it('Should return error message if start date does not have data', function () {
    expect(
      userHydrate.returnWeeklyWaterConsumption(1, "2018/06/21")
    ).to.equal('No data found for date selected')
  });
  
});
