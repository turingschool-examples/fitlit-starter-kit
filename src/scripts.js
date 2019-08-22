/***************** Variables *****************/
let name = document.querySelector('.main_user_name');
let address = document.querySelector('.main_user_address');
let email = document.querySelector('.main_user_email');
let stride = document.querySelector('.main_user_strideLength');
let goal = document.querySelector('.main_user_dailyStepGoal');
let friends = document.querySelector('.main_user_friends');
let welcome = document.querySelector('.main_header_welcome');
let hydroList = document.querySelector('.main_hydro_list');
let avgFluids = document.querySelector('.main_hydro_average');
let dailyFluids = document.querySelector('.main_hydro_daily');
let weeklyFluids = document.querySelector('.main_hydro_weekly')
let randoNum = null

/*************** Event Listeners *************/
window.addEventListener('load', initializePage(userData, hydrationData))

/***************** Functions *****************/
function getRandoNum() {
randoNum = Math.floor(Math.random() * 50) + 1  
}

function initializePage(data, hydro) {
	getRandoNum();
	const userRepository = new UserRepository(data)
	userRepository.findUser(randoNum)
	const user = new User(userRepository.currentUser)
	const hydroRepository = new HydroRepository(hydro)
	hydroRepository.findUserID(randoNum);
	const userHydro = new UserHydro(hydroRepository.currentUser)
	name.innerHTML = `Name: ${user.name}`
	address.innerHTML = `Address: ${user.address}`
	email.innerHTML = `Email: ${user.email}`
	stride.innerHTML = `Stride Length: ${user.strideLength} feet`
	goal.innerHTML = `Step Goal: ${user.dailyStepGoal} steps       Global Average Step Goal: ${userRepository.findAverageStep()} steps`
	friends.innerHTML = `Friends: ${findFriends(userRepository, user)}`
	welcome.innerHTML = `Welcome ${user.firstName()}!`;
	avgFluids.innerHTML = `Average fluid ounces intake: ${userHydro.findAvgOunce()}`
	let hydroDates = userHydro.findDates()
	appendHydroList(hydroDates, userHydro);
}

function findFriends(userRepository, user) {
	newFriends = [];
	user.friends.forEach(friend => {
		let friendInfo = userRepository.findUser(friend)
			newFriends.push(friendInfo.name)
			newFriends.push(friendInfo.dailyStepGoal)
		})
	return newFriends
}

function appendHydroList(array, obj) {
	let dateList = document.createElement("select");
	dateList.setAttribute("id", "mySelect");
	hydroList.appendChild(dateList);
	for (let i = 0; i < array.length; i++) {
		var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    dateList.appendChild(option);
    if (dateList.value === array[i]) {
    		weeklyFluids.innerHTML = `Fluid ounces intake by week: ${obj.findOunceWeek(i).toFixed(2)}`
    }
	}
		dateList.addEventListener('change', function() {
			obj.findOunceDay(dateList.value)
			dailyFluids.innerHTML = `Fluid ounces intake by day: ${obj.day}`;
			for (let i = 0; i < array.length; i++) {
				if (dateList.value === array[i]) {
    		weeklyFluids.innerHTML = `Fluid ounces intake by week: ${obj.findOunceWeek(i).toFixed(2)}`
    		}
			}
		})
		obj.findOunceDay(dateList.value)
		dailyFluids.innerHTML = `Fluid ounces intake by day: ${obj.day}`;
}