const userInfoCard = document.querySelector('.userInfoCard')
const user = new User(userData);
const users = new UserRepo(userData);
const randomNum = Math.floor(Math.random() * 50 + 1);
const randomUser = users.getSingleUserData(randomNum);


userInfoCard.insertAdjacentHTML('afterbegin', `<div class='displayInfoCard'>
<label>Name: ${randomUser.name}</label> 
<label>Address: ${randomUser.address}</label> 
<label>Email: ${randomUser.email}</label> 
<label>Stride Length: ${randomUser.strideLength}</label> 
<label>Daily Step Goal: ${randomUser.dailyStepGoal}</label>  
</div>`)