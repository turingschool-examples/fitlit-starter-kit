import { expect } from "chai";
import Hydration from "../src/Hydration";
import hydrationData from "../src/data/hydration";

describe('Hydration', function(){
    let data 
    let userHydrate
    beforeEach(()=>{
        data = hydrationData
        userHydrate = new Hydration(data)
    })

    it("Should be a function", function () {
        expect(Hydration).to.be.a("function");
    });

    it("Should be an instance of User", function () {
        expect(userHydrate).to.be.an.instanceof(Hydration);
    });

    it("Should have a property that hold hydration data", function (){
        expect(userHydrate.data).to.deep.equal(data)
    })

    it("Should track average ounces of water consumed per day for all time", function () {
        expect(userHydrate.calcAvgWaterConsumption(1)).to.equal(67)
    })

})