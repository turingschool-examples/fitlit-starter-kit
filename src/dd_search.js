$(document).ready(function() {
  $('.dropdown header').on('click', function() {
    $('.dropdown div').toggle();
  });

  $('.dropdown div p').on('click', function() {
    $('.dropdown header p').text($(this).text());
    $('.dropdown input').val($(this).text());
    console.log($('.dropdown input').val());
  });

  $('.search label').on('click', function() {
    $('.content section header input').toggle();
    $('.content section header button').toggle();
    $('.content section header h1').toggle();
    $('.dropdown').toggle();
  });
});
