let user = new User(userData[15])
// let hydration = new Hydration(userData[15])

$('span.user-name').html(user.returnFirstName());
$('article.user').append("<div class='user-card'></div>")
$('div.user-card').append("<h6> Name: <span class='name-span'></span></h6><h6>Address: <span class='address-span'></span></h6><h6> Email: <span class='email-span'></span></h6><h6>Daily Step Goal: <span class ='goal-span'></span></h6>")
$('span.name-span').text(`${user.userData.name}`)
$('span.address-span').text(`${user.userData.address}`)
$('span.email-span').text(`${user.userData.email}`)
$('span.goal-span').text(`${user.userData.dailyStepGoal}`)


