console.log("Hello World");




let user = new User(userData[0])
console.log(userData[0])

$('span.user-name').html(user.returnFirstName());
$('article.user').append("<div class='user-card'></div>")
$('div.user-card').append("<h6 class='name-h6'></h6><h6 class ='address-h6'></h6><h6 class ='email-h6'></h6><h6 class ='goal-h6'></h6>")
$('h6.name-h6').text(`${user.userData.name}`)
$('h6.address-h6').text(`${user.userData.address}`)
$('h6.email-h6').text(`${user.userData.email}`)
$('h6.goal-h6').text(`${user.userData.dailyStepGoal}`)