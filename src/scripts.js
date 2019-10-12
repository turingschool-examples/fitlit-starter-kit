const userRepo = new UserRepo(userData);
const user = new User(userData[12]);
const hydration = new Hydration(user.userID)

$('.user-name').text(user.returnFirstName());
$('.address').text(user.address);
$('.email').text(user.email);
$('.stride').text(user.strideLength);
$('.step-goal').text(user.dailyStepGoal);
$('.user-avg').text(userRepo.calculateAvgStepGoal());
$('.hydration-today').text(hydration.findOzByDay(3, '2019/06/22', hydrationData));
$('#day-1').text(`Day 1: ${hydration.findOzByWeek(3, '2019/06/22', hydrationData)[0]}`);
$('#day-2').text(`Day 2: ${hydration.findOzByWeek(3, '2019/06/22', hydrationData)[1]}`);
$('#day-3').text(`Day 3: ${hydration.findOzByWeek(3, '2019/06/22', hydrationData)[2]}`);
$('#day-4').text(`Day 4: ${hydration.findOzByWeek(3, '2019/06/22', hydrationData)[3]}`);
$('#day-5').text(`Day 5: ${hydration.findOzByWeek(3, '2019/06/22', hydrationData)[4]}`);
$('#day-6').text(`Day 6: ${hydration.findOzByWeek(3, '2019/06/22', hydrationData)[5]}`);
$('#day-7').text(`Day 7: ${hydration.findOzByWeek(3, '2019/06/22', hydrationData)[6]}`);
