$(document).ready(function() {
  $('.dropdown header').on('click', function() {
    $(this).siblings('div').toggle();
  });

  $('.dropdown div p').on('click', function() {
    $(this).parent().siblings('header').children('p').text($(this).text());
    $(this).parent().siblings('input').val($(this).text());
    $(this).parent().hide();
  });

  $('.search label').on('click', function() {
    $(this).parent().children().toggle();
    $(this).parent().siblings('.dropdown').toggle();
  });

  $('.search button').on('click', function() {
    $date = $(this).siblings('input').val();
    $parent = $(this).parent().siblings('.dropdown');
    $(this).parent().children().toggle();
    $parent.toggle();
    if (/^\d{1,4}\/\d{1,2}\/\d{1,2}$/.test($date)) {
      $parent.children('header').children('p').text($date);
      $parent.children('input').text($date);
    }
  });


});
