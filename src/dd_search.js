$(document).ready(function() {
  $('.dropdown header').on('click', function() {
    $('.dropdown div').toggle();
  });

  $('.dropdown div p').on('click', function() {
    $('.dropdown header p').text($(this).text());
    $('.dropdown input').val($(this).text());
    $('.dropdown div').hide();
  });

  $('.search label').on('click', function() {
    $('.content section header input').toggle();
    $('.content section header button').toggle();
    $('.dropdown').toggle();
  });
});
