$(window).ready(function(){
  $('.hero > *:last-child').addClass('last-child')
  width();
  $(window).resize(width);
})
function width(){
  if($(window).width() >= 1200){
    $('body').addClass('full-width');
  } else {
    $('body').removeClass('full-width');
  }
  if($(window).width() <= 767){
    $('body').addClass('tablet-width');
  } else {
    $('body').removeClass('tablet-width');
  }
}