var props = [
    {
        name: 'Marshall Square',
        about: "Marshall Square consists of three residential buildings with 12 (2) Bedroom units in each located in Northwest Greensboro, NC. The property is conveniently located within a 10-minute drive of several major attractions in the downtown area including Elm Street (main street) and UNC Greensboro. The immediate surrounding area has experienced significant commercial development in recent years. Rent and job growth in the Piedmont Triad have outpaced levels achieved in other major North Carolina cities over the past two years. The city of Greensboro is conveniently and centrally located within a two-hour drive of Charlotte, Winston-Salem, Durham, and Raleigh. Built in 2007, Marshall Square has averaged occupancy of over 89% over the last 3 years.",
        images: [
            './assets/images/marshall-sq-1.jpg',
            './assets/images/marshall-sq-2.jpg',
            './assets/images/marshall-sq-3.jpg',
            './assets/images/marshall-sq-4.jpg',
            './assets/images/marshall-sq-5.jpg',
            './assets/images/marshall-sq-6.jpg',
        ]
    }
]

$(document).ready(function() {
    if (window.location.href.indexOf("properties") > -1) {
        console.log("you're in properties");
        if (props.length > 0) {
            if (props[0].images.length > 0) {
                $('#image-carousel').removeClass('d-none')
                for (var i = 0; i < props[0].images.length; i++) {
                    var listItem = $('<li>').attr({
                        "data-target":'#image-carousel',
                        "data-slide-to": i
                    })
                    if (i === 0) {
                        $('.carousel-indicators').append(listItem.addClass('active'))
                    } else {
                        $('.carousel-indicators').append(listItem)
                    }
                    var innerImgDiv = $('<div>').addClass("carousel-item")
                    if (i === 0) {
                        innerImgDiv.addClass('active')
                    }
                    var innerImg = $('<img>').attr({
                        src: props[0].images[i],
                        alt: 'Property image of ' + props[0].name}).addClass('d-block w-100')
                    innerImgDiv.append(innerImg)
                    $('.carousel-inner').append(innerImgDiv)
                }
            }
            $('.property-name').append($('<h1>').text(props[0].name))
            $('.property-about').append($('<p>').text(props[0].about))
        }
    }
});