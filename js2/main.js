(function() {

    var quotes = $(".news");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(3000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
})();
(function() {

    var quotes = $(".news2");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(3000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
})();