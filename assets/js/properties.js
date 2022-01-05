var props = [
    {
        name: 'Marshall Square',
        urlPath: 'marshall-square',
        location: 'Greensboro, NC',
        size: '34 Units',
        about: "Marshall Square is a 34-Unit, Class B property built in 2007 and 2015 and located in Northwest Greensboro, NC. FishHawk Capital acquired the property in March 2021 for $2,830,000.",
        images: [
            'https://images1.apartments.com/i2/P0HOnwkgCm_fXIKVgiH7Ga5jAYPuwIvtLtjfV5xju2U/111/marshall-square-apartments-greensboro-nc-master-bedroom.jpg?p=1',
            'https://images1.apartments.com/i2/nzzts5glstkz9PN3HWT4AcuBZOjAo9Yi6kWzxATNodY/112/marshall-square-apartments-greensboro-nc-second-room.jpg?p=1',
            'https://images1.apartments.com/i2/ULaPqXJyj2a02iTdPhe4zovn-2taTHahisWcxD-aF7w/112/marshall-square-apartments-greensboro-nc-building-photo.jpg?p=1',
            'https://images1.apartments.com/i2/g89ebXEQSIQmrW7lan7VexN6lOoUvRf6kVfSujJxYsw/112/marshall-square-apartments-greensboro-nc-building-photo.jpg?p=1',
            'https://images1.apartments.com/i2/aBrgacjmStCd7rNX5eFPFJw09g4anmvY17k0tQfFaQ4/112/marshall-square-apartments-greensboro-nc-building-photo.jpg?p=1',
            './assets/images/marshall-sq-1.jpg',
        ],
        embedCode: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1815.799769313539!2d-79.87523211491634!3d36.069279649623965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88531ba081954641%3A0xadef8afad8ddf172!2s100%20Thornton%20Ct%2C%20Greensboro%2C%20NC%2027407!5e1!3m2!1sen!2sus!4v1608787749615!5m2!1sen!2sus" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    },
    {
        name: '116 N. Markley',
        urlPath: '116-n-markley',
        location: 'Greenville, SC',
        size: '10,068 sq ft',
        about: "116 N. Markley Street is a Single-tenant, Office Building consisting of 10,068 rentable square feet located in downtown Greenville, SC. The current tenant, Fortis, has been in the space since 2017 and recently extended their lease through January of 2035. The property is conveniently located within walking distance of Greenville’s major attractions including Falls Park on the Reedy, Main Street, the Swamp Rabbit Trail, and Fluor Field (home of the High-A Minor League Baseball team the Greenville Drive). The immediate surrounding area has experienced significant commercial development in recent years including new residential and retail projects.",
        images: [
            'https://www.johnstondesigngroup.us/wp-content/uploads/1-Fortis-Riders.jpg',
            'https://www.johnstondesigngroup.us/wp-content/uploads/2-Fortis-Riders.jpg',
            'https://www.johnstondesigngroup.us/wp-content/uploads/3-Fortis-Riders.jpg',
            'https://www.johnstondesigngroup.us/wp-content/uploads/4-Fortis-Riders.jpg',
            'https://www.johnstondesigngroup.us/wp-content/uploads/5-Fortis-Riders.jpg',
            'https://www.johnstondesigngroup.us/wp-content/uploads/6-Fortis-Riders.jpg',
            'https://www.johnstondesigngroup.us/wp-content/uploads/7-Fortis-Riders.jpg',
            'https://www.johnstondesigngroup.us/wp-content/uploads/9-Fortis-Riders.jpg',
            'https://www.johnstondesigngroup.us/wp-content/uploads/10-Fortis-Riders.jpg'
        ],
        embedCode: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5096.959656809649!2d-82.41306589687647!3d34.84566352926587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885831d1b85476ab%3A0x2ae8abc610964694!2sFortis%20Riders!5e1!3m2!1sen!2sus!4v1640986487040!5m2!1sen!2sus" style="border:0;" allowfullscreen=""></iframe>'
    }
]

$(document).ready(function() {
    if (window.location.href.indexOf("properties") > -1) {
        if (props.length > 0) {
            const urlSearchParams = new URLSearchParams(window.location.search);
            const params = Object.fromEntries(urlSearchParams.entries());
            let property
            if (params.property) {
                property = props.find(prop => prop.urlPath == params.property)
            }
            if (!property) {
                property = props[0]
            }
            if (property.images.length > 0) {
                $('#image-carousel').removeClass('d-none')
                for (var i = 0; i < property.images.length; i++) {
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
                        src: property.images[i],
                        alt: 'Property image of ' + property.name}).addClass('d-block w-100')
                    innerImgDiv.append(innerImg)
                    $('.carousel-inner').append(innerImgDiv)
                }
            }
            $('.property-name').append($('<h1>').text(property.name.toUpperCase()))
            $('.property-location').append($('<h4>').text(property.location))
            $('.property-size').append($('<h4>').text(property.size))
            $('.property-about').append($('<p>').text(property.about))
            $('.property-map').html(property.embedCode)
        }
    }
});