$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots: false,
    // adaptiveHeight: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // infinite: true,
    speed: 1000,
    // slidesToShow: ,
    // slidesToScroll: ,
    // easing: 'ease',
    // initialSlider: 0,
    // pauseOnFocus: true,
    // pauseOnHover: true,
    // pauseOnDotsHover: true,
    // draggable: false,
    swipe: true,
    // touchThreshold: 10,
    // touchMove: true,
    // waitForAnimate: true,
    // centerMode: true,
    // variableWidth: true,
  });

});


$(document).ready(function(){
  $('.slider2').slick({
    dots: true,
    arrows: true,
    adaptiveHeight: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    // slidesToShow: ,
    slidesToScroll: 1,
    // easing: 'ease',
    // initialSlider: 0,
    // pauseOnFocus: true,
    // pauseOnHover: true,
    // pauseOnDotsHover: true,
    // draggable: false,
    // swipe: true,
    // touchThreshold: 10,
    // touchMove: true,
    // waitForAnimate: true,
    // centerMode: true,
    variableWidth: true,
  });
});
$(document).ready(function() {
  $('.header-burger').click(function(event) {
    $('.header-burger,.header-menu').toggleClass('active');
  });
});