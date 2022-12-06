import { expect } from "chai";
import UserRepository from "../src/UserRepository";
import User from "../src/User";

describe("User Repository", () => {
	let user1;
	let userData;

	beforeEach("test setup", function () {
		userData = {
			id: 1,
			name: "Luisa Hane",
			address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
			email: "Diana.Hayes1@hotmail.com",
			strideLength: 4.3,
			dailyStepGoal: 10000,
			friends: [16, 4, 8],
		};
		user1 = new User(userData);
	});

	it("should be a function", function () {
		expect(User).to.be.a("function");
	});

	it("should be an instance of User", function () {
		expect(user1).to.be.an.instanceof(User);
	});

	it("should store the User's id", function () {
		expect(user1.id).to.equal(1);
	});

	it("should store the User's name", function () {
		expect(user1.name).to.equal("Luisa Hane");
	});

	it("should store the User's address", function () {
		expect(user1.address).to.equal(
			"15195 Nakia Tunnel, Erdmanport VA 19901-1697"
		);
	});

	it("should store the User's email", function () {
		expect(user1.email).to.equal("Diana.Hayes1@hotmail.com");
	});

	it("should store the User's strideLength", function () {
		expect(user1.strideLength).to.equal(4.3);
	});

	it("should store the User's daily step goal", function () {
		expect(user1.dailyStepGoal).to.equal(10000);
	});

	it("should store the User's friends", function () {
		expect(user1.friends).to.deep.equal([16, 4, 8]);
	});

	it("should return the User's first name", function () {
		expect(user1.findFirstName()).to.equal("Luisa");
	});
});
