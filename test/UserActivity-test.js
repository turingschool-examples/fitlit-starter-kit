import { expect } from "chai";
import User from "../src/User";
import UserActivity from "../src/UserActivity";

const userTestData = require("../src/data/userTestData");
const userActivityTestData = require("../src/data/userActivityTestData")

describe("UserActivity", ()=> {
    let userActivity;
    let userMiles;
    beforeEach(()=>{
        userActivity = new UserActivity(userActivityTestData[0])
        userMiles = new User(userTestData[0])
    })

    
})