$(".hamburger-btn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    $(".circle-bg").toggleClass('circleactive');
});

$("#g-nav a").click(function () {
    $(".hamburger-btn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
    $(".circle-bg").removeClass('circleactive');
});


$(window).scroll(function() {
    let scroll = $(this).scrollTop();
    console.log(scroll);
    if(scroll > 100){
        $(".header").addClass('scroll');
        $(".hamburger-btn").addClass('scroll-btn');
    }else{
        $(".header").removeClass('scroll');
        $(".hamburger-btn").removeClass('scroll-btn');
    }
});


$('a[href^="#"]').click(function () {
    let speed = 400;
    let href = $(this).attr('href');
    let target = $(href == "#" || href == "" ? 'html' : href);
    let pos = $(target).offset().top-100;

    $('html,body').animate({scrollTop: pos}, speed, "easeInCubic");
    return false;
  });

