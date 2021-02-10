$(document).ready(function(){
  
    var quotes = ["There is only one happiness in this life, to love and be loved.    -George Sand", "Love yourself. It is important to stay positive because beauty comes from the inside out. -Jenn Proske", "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. -Lao Tzu", "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that. -Martin Luther King jr.", "Love is the only force capable of transforming an enemy into a friend. -Martin Luther King jr.", "A friend is someone who knows all about you and still loves you. -Dr.Seuss", "You know you are in love when you can/'t fall asleep because reality is finally better than your dreams. -Elbert Hubbard"]; 
    
    fetchQuote(quotes);
     $("#nxtQuote").click(function() {
       fetchQuote(quotes);
       
     });
     function fetchQuote(q) {
       var quoteNum = Math.floor(Math.random() * quotes.length);
       $("#quoteDisplay").text("_" + q[quoteNum] + "_");
       $(".tweet-btn").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent("-" + q[quoteNum]));
     }
     });
   
    
    