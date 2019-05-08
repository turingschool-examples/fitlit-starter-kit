const $main = $('main')
const $section = $('section');
const $h2FirstName = $('h2--first-name');
const $ul = $('ul');
const $li = $('li');
const $liName = $('li--name');
const $liAddress = $('li--address');
const $liEmail = $('li--email');
const $liStrideLength = $('li--stride-length');
const $liDailyStepGoal = $('li--daily-step-goal');
const $stepGoalMessage = $('step-goal-message');


$(document).ready(function() {
	const userRepo = new UserRepository();
	populateUserInfo();

	function populateUserInfo() {
		console.log(userRepo.instantiateUsers())
		console.log(userRepo.returnUserData(3).returnFirstName())
		$h2FirstName.text(userRepo.returnUserData(3).returnFirstName());
	}

})
