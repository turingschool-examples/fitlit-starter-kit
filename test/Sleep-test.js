import { expect } from "chai";
import Sleep from "../src/Sleep";
import sleepRepo from "../src/data/sleep";


describe("Sleep", function () {
    let userSleep;
    let sleepRepository;


    beforeEach(() => {
        sleepRepository = sleepRepo
        userSleep = new Sleep(sleepRepository)
    })
})