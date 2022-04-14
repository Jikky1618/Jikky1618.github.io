$(function() {
    const hum = $('#hamburger, #close')
    const nav = $('#sp-nav')
    hum.on('click', function(){
        nav.toggleClass('toggle');
    });
});