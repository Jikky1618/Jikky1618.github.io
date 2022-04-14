$(function() {
    const hum = $('#hamburger, #close')
    hum.on('click', function(){
        $('#sp-nav').toggleClass('toggle');
    });
});