import { expect } from "chai";
import SleepRepository from "../src/SleepRepository";
import sleepData from "../src/data/sleep";

describe('Sleep', () => {
    let sleepRepository;

    beforeEach(() => {
        sleepRepository = new SleepRepository(sleepData);
    })

    it("should be a function", () => {
        expect(SleepRepository).to.be.a("function");
    });

    it("should be a new instance of SleepRepository", () => {
      expect(sleepRepository).to.be.an.instanceof(SleepRepository);
    });

    it("should hold the users sleep data", () => {
      expect(sleepRepository.sleepData).to.equal(sleepData);
    });

    it("should return all of users sleep data given its id number", () => {
      expect(sleepRepository.getSleepDataForUser(1)).to.deep.equal();
      console.log();
    });

})