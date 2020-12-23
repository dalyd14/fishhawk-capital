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

$('.menu-items').on('click', 'a', function() {
    var goToId = $(this).attr('go-to-id')
    if (window.location.href.indexOf("properties") > -1 || window.location.href.indexOf("news") > -1) {
        if (goToId === 'core-values' || goToId === 'mission' || goToId === 'leadership') {
            window.location.href = './index.html#' + goToId
        }
    } else {
        if (goToId === 'core-values' || goToId === 'mission' || goToId === 'leadership') {
            document.querySelector('#' + goToId).scrollIntoView({
                behavior: 'smooth' 
            });
        }
    }
})