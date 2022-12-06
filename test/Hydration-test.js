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

})