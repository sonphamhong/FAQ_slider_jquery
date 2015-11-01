var action = 'click';
var speed = 500;

$(document).ready(function() {
  $('li.q').on(action, function() {
    $(this).next().slideToggle(speed).siblings('li.a').slideUp();

    var img = $(this).children('img');
    
    img.toggleClass('rotate');
    $('img').not(img).removeClass('rotate');
  });
});