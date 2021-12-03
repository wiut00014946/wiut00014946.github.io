/* search from array of articles */

//define array of article titles
var articleTitles = ['Best countries to visit this year', 'Most expensive countries in the world', 'Exploring the highest mountain on Earth - Mount Everest'];

//call function on form submit
document.getElementById("search-form").addEventListener("submit", function(event) {
    //prevent form submission
    event.preventDefault();
    //define variables
    var searchInput = document.getElementById("search-input");
    var searchResult = document.getElementById("search-result");
    //check if input value is not empty
    if (searchInput.value != "") {
        //main logic of the function
        var regex = new RegExp(searchInput.value, 'i');
        var filterArticleTitles = articleTitles.filter(item => regex.test(item));
        var output = '';
        filterArticleTitles.forEach(outputFunction);
        function outputFunction(value) {
            output += '<a href="index.html"><div class="search-result">' + value + '</div></a>';
        }
        var outputHeader = '<div class="search-results">Search results:</div>';
        searchResult.innerHTML = outputHeader + output;
    } else {
        searchResult.innerHTML = "";
    }
});