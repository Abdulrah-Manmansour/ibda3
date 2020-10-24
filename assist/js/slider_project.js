$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('activ');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('activ');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.activ').width();
  console.log($('.activ').position().right);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({right: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({right: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev activ next');
  
  $(this).addClass('activ');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.activ').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.activ').next().trigger('click');
  }
});

$(".r").click(function(){
    $('.activ').next().trigger('click');
});
$(".l").click(function(){
    $('.activ').prev().trigger('click');
});
