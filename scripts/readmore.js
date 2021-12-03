/* display more artcile text */

//assign article texts into array
var articles = [
    {
        article_one: [
            'Here’s a list of some of the must visit countries this year:',
            'Bali, Indonesia: "You’ll find beaches, volcanoes, Komodo dragons and jungles sheltering elephants, orangutans and tigers. Basically, it’s paradise. It’s likely you’ve seen an image of Bali on social media at least once in the past seven days, as it’s such a popular bucket list destination."',
            'New Orleans: "The lively city known for its street music, festive vibe and a melting pot of French, African and American cultures is well worth the trip. NOLA is a city packed with adventures at every turn and should be on everyone’s must-visit list."',
            'Kerry, Ireland:" All the way west in Ireland is one of the country’s most scenic counties. Kerry’s mountains, lakes and coasts are postcard-perfect, and that’s before you add in Killarney National Park. The unique small towns such as Dingle add to its charm."',
            'Marrakesh, Morocco: "This ancient walled city is home to mosques, palaces and lush gardens. It’s known as The Red City thanks to the color of the brick walls surrounding the city. The medina is a UNESCO World Heritage Centre."',
            'Sydney: "Sydney is known around the world as one of the greatest and most iconic cities on the planet. Amazing things to do aren’t hard to find; the city has gorgeous beaches, great cafes and world-class entertainment on offer wherever you look."'
        ],
        article_two: [
            'Here’s a list of some of the most expensive countries to live in world:',
            'Switzerland',
            'Perhaps, coming as no surprise, Switzerland is one of the most expensive countries to live in. If you have ever journeyed there, then you can attest that it is pricey. The country is especially pricey when it comes to food, beverages, hotels, housing, restaurants, clothing, and health insurance – or pretty much everything you need. The cost of restaurants and groceries is outrageously high, and is often described as more expensive than any other country in the world.',
            'Bermuda',
            'When you consider the beaches and turquoise water that Bermuda has to offer, it’s easy to understand why someone would want to live on the island. But unfortunately, that’s far out of the realm of reality for most people.',
            'Iceland',
            'This Nordic island country has been a popular destination for millennial travel bloggers and nature lovers in recent years. Iceland’s cost of living is quite high, but interestingly, it isn’t due to housing. You can rent a home for less than half of what you could in New York. It’s food that’s pricey — you will have to spend quite a fortune on groceries.',
            'Norway',
            'Norway has always ranked higher in the list of most expensive countries in the world, and tourists definitely feel it when they compare what their currency can get them once exchanged. Food is very costly, as is eating out, and even things such as taxi fares are sometimes double what you would expect to pay in the rest of Europe.',
            'Luxembourg',
            'The tiny nation of Luxembourg has a very high purchasing power. Whilst it’s filled with high-end banking and international finance corporations, it pays for this by having really expensive restaurants, cafes and bars.'
        ],
        article_three: [
            'Mount Everest is Earth’s highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas.',
            'The China–Nepal border runs across its summit point. Its elevation (snow height) of 8,848.86 m (29,031.7 ft) was most recently established in 2020 by the Chinese and Nepali authorities. Mount Everest attracts many climbers, including highly experienced mountaineers.',
            'There are two main climbing routes, one approaching the summit from the southeast in Nepal (known as the "standard route") and the other from the north in Tibet. While not posing substantial technical climbing challenges on the standard route, Everest presents dangers such as altitude sickness, weather, and wind, as well as significant hazards from avalanches and the Khumbu Icefall. As of 2019, over 300 people have died on Everest, many of whose bodies remain on the mountain.',
            'The first recorded efforts to reach Everest’s summit were made by British mountaineers. As Nepal did not allow foreigners to enter the country at the time, the British made several attempts on the north ridge route from the Tibetan side. After the first reconnaissance expedition by the British in 1921 reached 7,000 m (22,970 ft) on the North Col, the 1922 expedition pushed the north ridge route up to 8,320 m (27,300 ft), marking the first time a human had climbed above 8,000 m (26,247 ft). The 1924 expedition resulted in one of the greatest mysteries on Everest to this day: George Mallory and Andrew Irvine made a final summit attempt on 8 June but never returned, sparking debate as to whether or not they were the first to reach the top.',
            'Tenzing Norgay and Edmund Hillary made the first official ascent of Everest in 1953, using the southeast ridge route. Norgay had reached 8,595 m (28,199 ft) the previous year as a member of the 1952 Swiss expedition. The Chinese mountaineering team of Wang Fuzhou, Gonpo, and Qu Yinhua made the first reported ascent of the peak from the north ridge on 25 May 1960.'
        ]
    }
];

//define variables
var articleOneButton = document.getElementById("article-one-button");
var articleTwoButton = document.getElementById("article-two-button");
var articleThreeButton = document.getElementById("article-three-button");
var articleOneExtended = document.getElementById("article-one-extended");
var articleTwoExtended = document.getElementById("article-two-extended");
var articleThreeExtended = document.getElementById("article-three-extended");

//define functions

//function inserts content into P tags of article_one
function toParagraphArticleOne(articleExtended) {
    for (var article of articles) {
        for (var paragraph of article.article_one) {
            var paragraphTag = document.createElement('P');
            paragraphTag.textContent = paragraph;
            articleExtended.appendChild(paragraphTag);
        }
    }
}

//function inserts content into P tags of article_two
function toParagraphArticleTwo(articleExtended) {
    for (var article of articles) {
        for (var paragraph of article.article_two) {
            var paragraphTag = document.createElement('P');
            paragraphTag.textContent = paragraph;
            articleExtended.appendChild(paragraphTag);
        }
    }
}

//function inserts content into P tags of article_three
function toParagraphArticleThree(articleExtended) {
    for (var article of articles) {
        for (var paragraph of article.article_three) {
            var paragraphTag = document.createElement('P');
            paragraphTag.textContent = paragraph;
            articleExtended.appendChild(paragraphTag);
        }
    }
}

//function displays more detailed text of articles
function extendArticles(articleButton, articleExtended, toParagraphArticle) {
    articleButton.addEventListener("click", function() {
        if (articleExtended.innerHTML === "") {
            toParagraphArticle(articleExtended);
            articleButton.innerHTML = "Read less";
        } else {
            articleExtended.innerHTML = "";
            articleButton.innerHTML = "Read more";
        }
    });
}

//call functions
extendArticles(articleOneButton, articleOneExtended, toParagraphArticleOne);
extendArticles(articleTwoButton, articleTwoExtended, toParagraphArticleTwo);
extendArticles(articleThreeButton, articleThreeExtended, toParagraphArticleThree);