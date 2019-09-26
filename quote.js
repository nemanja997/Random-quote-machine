//Promenljive za cuvanje citata
var trenutniQuote;
var trenutniAutor;

$(document).ready(function() {
  
    //Uzimanje citata na pocetku
    uzmiCitat();

    //Uzimanje citata pritiskom na dugme
    $("#dugmeQuote").on("click", function(){
        $("#citatDiv").fadeOut(10, function(){
            $(this).fadeIn("slow");
            uzmiCitat();
        });

        $("#authorDiv").fadeOut(10, function(){
            $(this).fadeIn("slow");
            uzmiCitat();
        });
    });
  //Postavljanje citata na Twitter
    $("#dugmeTweet").on("click", function(){
      var twitterURL = "http://twitter.com/home?status="+"pozdrav"+ "   -"+trenutniAutor;
        /*window.location.href = "http://twitter.com/home?status="+"''"+trenutniQuote+"''"+ "   -"+trenutniAutor; */
        window.open(twitterURL, '_blank');
    });
  
});

//Funkcija za GET request citata
function uzmiCitat(){
    $.getJSON("https://api.quotable.io/random", function(a) {
        $("#citatDiv").html( '"'+ a.content +'"' );
        $("#authorDiv").html("-" + a.author );
        trenutniQuote=a.quote;
        trenutniAutor=a.author;
    });
};

