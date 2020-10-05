
// ====================================== slick js=============

$(document).ready(function(){
  $('.section__life-sportslider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<div class="nextArrowBtn"><img src="./images/next_icon.png"/></div>',
    prevArrow: '<div class="prevArrowBtn"><img src="./images/prev_icon.png"/></span>',
    slidesToShow: 3,
  responsive: [
    {
      
    },
    {
      breakpoint: 480,
      settings: {       
        centerMode: true,       
      }
    }
  ]
  });
  $('.section__talk__circle').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<div class="nextArrowBtn"><img src="./images/next_icon.png"/></div>',
    prevArrow: '<div class="prevArrowBtn"><img src="./images/prev_icon.png"/></span>'
  });
  $('.section__background-parent').slick({
    dots:true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });
  $('.header__menures').hide();
$('.clickbar').click (()=> {
 
  $(".header__menures").slideToggle();

})
$('.show__form').click (()=> {
  
  $(".section__background-form").slideToggle();

})

  $( function() {
    $("#tabs").tabs();
  } );


})