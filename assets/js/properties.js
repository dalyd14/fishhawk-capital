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
        ],
        embedCode: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1815.799769313539!2d-79.87523211491634!3d36.069279649623965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88531ba081954641%3A0xadef8afad8ddf172!2s100%20Thornton%20Ct%2C%20Greensboro%2C%20NC%2027407!5e1!3m2!1sen!2sus!4v1608787749615!5m2!1sen!2sus" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
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
            $('.property-map').html(props[0].embedCode)
        }
    }
});