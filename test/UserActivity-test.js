import { expect } from "chai";
import UserActivity from "../src/UserActivity";
const userActivityTestData = require("../src/data/userActivityTestData")

describe("UserActivity", ()=> {
    let userActivity;
    beforeEach(()=>{
        userActivity = new UserActivity(userActivityTestData.filter(data => data.userID === 1))
    })
    
    it.only('should return the miles a user has walked based on their number of steps specified by a date', ()=> {
      const result = userActivity.numOfSteps("2019/06/15")
        expect(result).to.equal(3577)
      })
})