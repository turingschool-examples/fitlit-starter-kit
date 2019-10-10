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
    $('.search').children().toggle();
    $('.dropdown').toggle();
  });

  $('.search button').on('click', function() {
    $('.search').children().toggle();
    $('.dropdown').toggle();
  });
});
