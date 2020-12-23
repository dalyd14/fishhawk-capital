var newsArticles = [
    {
        title: "Focus On Guilford Apartment Boom",
        description: "Apartment boom forecasts economic and population expansion",
        link: 'https://bizjournals.com/triad/news/2020/12/11/focus-on-guilford-apartment-boom.html',
        websiteName: 'bizjournals.com',
        image: 'https://media.bizj.us/view/img/11697467/8-west*xx1499-1124-251-0.jpg',
        date: 'Dec 11, 2020, 6:00 am EST'
    },
    {
        title: "Focus On Guilford Apartment Boom",
        description: "Apartment boom forecasts economic and population expansion",
        link: 'https://bizjournals.com/triad/news/2020/12/11/focus-on-guilford-apartment-boom.html',
        websiteName: 'bizjournals.com',
        image: 'https://media.bizj.us/view/img/11697467/8-west*xx1499-1124-251-0.jpg',
        date: 'Dec 11, 2020, 6:00 am EST'
    },
    {
        title: "Focus On Guilford Apartment Boom",
        description: "Apartment boom forecasts economic and population expansion",
        link: 'https://bizjournals.com/triad/news/2020/12/11/focus-on-guilford-apartment-boom.html',
        websiteName: 'bizjournals.com',
        image: 'https://media.bizj.us/view/img/11697467/8-west*xx1499-1124-251-0.jpg',
        date: 'Dec 11, 2020, 6:00 am EST'
    }
]
var ourNews = []

$(document).ready(function() {
    if (window.location.href.indexOf("news") > -1) {
        console.log("you're in news");
        if (newsArticles.length > 0) {
            newsArticles.forEach(article => {
                var singleArticle = $("<a>").attr('href', article.link).attr("target", "_blank").addClass('news-article').html(
                    `<div class="article-main-info">
                        <div class="article-img">
                            <img src=${article.image}>
                        </div>
                        <div class="article-title">
                            <h3>${article.title}</h3>
                        </div>
                    </div>
                    <div class="article-sub-info">
                        <div class="article-preview">
                            <p>${article.description}</p>
                        </div>
                        <div class="article-date">
                            <h6>${article.date}</h6>
                        </div>
                        <div class="article-source">
                            <h6>${article.websiteName}</h6>
                        </div>
                    </div>`
                )
                $('.news-articles').append(singleArticle)             
            })


        }
    }
});