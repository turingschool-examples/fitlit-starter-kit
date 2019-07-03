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

// $(window).on("load", () => {
//   var newIDs = [];
//   for (let i = 1; newIDs.length < 5; i++) {

//   };
// });

$( document ).ready( () => {
  console.log( "document loaded" );
});

$( window ).on( "load", () => {
  console.log( "window loaded" );
});