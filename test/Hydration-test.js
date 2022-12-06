import { expect } from "chai";
import Hydration from "../src/Hydration";
import hydration from "../data/hydration";

describe('Hydration', function(){
    let data 
    beforeEach(()=>{
        data = hydration
        userHydrate = new Hydration(data)
    })

    it("Should be a function", function () {
        expect(userHydrate).to.be.a("function");
  });

})