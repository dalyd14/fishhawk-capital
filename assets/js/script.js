$('#current-year').text(new Date().getFullYear())

$('.menu-btn').click(function() {
    $('.top-bar').toggleClass('top-bar-menu')
    $('.bottom-bar').toggleClass('bottom-bar-menu')
    $('.menu-items').toggleClass('d-none')
    if($('#menu-page').hasClass('mobile-menu-hidden')) {
        $('#menu-page').addClass('mobile-menu-shown').removeClass('mobile-menu-hidden')
    } else {
        $('#menu-page').addClass('mobile-menu-hidden').removeClass('mobile-menu-shown')
        $('.properties-btn').children("span").removeClass("expand-less")
        $('.properties-btn').children("span").addClass("expand-more")
        $("ul#properties-list").addClass("prop-list-hidden")
        $("ul#properties-list").removeClass("prop-list-visible")
    }
})

$('.btn-learn-more').click(function() {
    document.querySelector('#get-in-touch').scrollIntoView({
        behavior: 'smooth' 
    });
})

$('#menu-page').on('click', 'a', function() {
    if (!$(this).hasClass('properties-btn')) {
        $('.menu-btn').trigger('click')
    }
    var goToId = $(this).attr('go-to-id')
    if (window.location.href.indexOf("properties") > -1 || window.location.href.indexOf("news") > -1) {
        if (goToId === 'core-values' || goToId === 'mission' || goToId === 'get-in-touch') {
            window.location.href = './index.html#' + goToId
        }
    } else {
        if (goToId === 'core-values' || goToId === 'mission' || goToId === 'get-in-touch') {
            document.querySelector('#' + goToId).scrollIntoView({
                behavior: 'smooth' 
            });
        }
    }
})

$('.properties-btn').click(function() {
    var spanChild = $(this).children("span")
    if (spanChild.hasClass("expand-more")){
        spanChild.removeClass("expand-more")
        spanChild.addClass("expand-less")
        $("ul#properties-list").addClass("prop-list-visible")
        $("ul#properties-list").removeClass("prop-list-hidden")
    } else {
        spanChild.removeClass("expand-less")
        spanChild.addClass("expand-more")
        $("ul#properties-list").addClass("prop-list-hidden")
        $("ul#properties-list").removeClass("prop-list-visible")
    }
})

if (props.length) {
    $('.props-dropdown').append(`<div class="dropdown-content"></div>`)
    props.forEach(prop => {
        $('#properties-list').append(`<li><a href="/properties?property=${prop.urlPath}">${prop.name}</a></li>`)
        $('.dropdown-content').append(`<a href="/properties?property=${prop.urlPath}">${prop.name}</a>`)
    });
}