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
    var scroll = $(this).scrollTop();
    console.log(scroll);
    if(scroll > 100){
        $(".header").addClass('scroll');
        $(".hamburger-btn").addClass('scroll-btn');
    }else{
        $(".header").removeClass('scroll');
        $(".hamburger-btn").removeClass('scroll-btn');
    }
});


