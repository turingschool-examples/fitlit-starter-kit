const currentDate = () => {
  var fullDate = new Date();
  var twoDigitMonth =
    fullDate.getMonth().length + 1 === 1
      ? fullDate.getMonth() + 1
      : "0" + (fullDate.getMonth() + 1);
  var currentDate =
    fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
  return currentDate;
};

const asideDate = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let current_datetime = new Date();
  let formatted_date =
    days[current_datetime.getDay()] +
    " - " +
    months[current_datetime.getMonth()] +
    " " +
    current_datetime.getDate() +
    ", " +
    current_datetime.getFullYear();
  return formatted_date;
};

$( document ).ready( () => {
  console.log( "document loaded" );
});

$( window ).on( "load", () => {
  console.log( "window loaded" );
  var newIDs = [];
  for (let i = 1; newIDs.length < 5; i++) {
    const randomID = Math.floor(Math.random() * userData.length) + 1;
   // const randomID = Math.floor(Math.random() * 10) + 1; //Temporary fixed userData length for sample data file
    if (newIDs.indexOf(randomID) === -1) {
      newIDs.push(randomID);
    }
  }

  const randomID = newIDs[1];

  //const user = new User();
  const userRepository = new UserRepository ();

  //$(".aside__welcome-name").html(user.getUserNameFromID(1));
  $(".aside__user-name").html(userRepository.returnUserData(1).name.split(' ')[0]);
  $(".section_full-user-name").html(userRepository.returnUserData(1).name);
  $(".section__address").html(userRepository.returnUserData(1).address);
  $(".section__email").html(userRepository.returnUserData(1).email);
  $(".section__stride-length").html(userRepository.returnUserData(1).strideLength);
  $(".aside__date").html(asideDate());


});

