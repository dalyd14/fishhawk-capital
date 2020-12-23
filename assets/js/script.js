$('.menu-btn').click(function() {
    $('.top-bar').toggleClass('top-bar-menu')
    $('.bottom-bar').toggleClass('bottom-bar-menu')
    $('.menu-items').toggleClass('d-none')
    if($('#menu-page').hasClass('mobile-menu-hidden')) {
        $('#menu-page').addClass('mobile-menu-shown').removeClass('mobile-menu-hidden')
    } else {
        $('#menu-page').addClass('mobile-menu-hidden').removeClass('mobile-menu-shown')
    }
})

$('.menu-items').on('click', 'a', function(){
    console.log($(this).text())
})