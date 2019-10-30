//Promenljive za cuvanje citata
var trenutniQuote;
var trenutniAutor;

$(document).ready(function() {
    
    $("#citatDiv").removeClass("hide");
    
    //Uzimanje citata na pocetku
    uzmiCitat();

    //Uzimanje citata pritiskom na dugme
    $("#dugmeQuote").on("click", function(){
        uzmiCitat();
        $("#citatDiv, #authorDiv").fadeOut(10, function(){
            $(this).fadeIn("slow");
        });
    });
    
  //Postavljanje citata na Twitter
    $("#dugmeTweet").on("click", function(){
        console.log(trenutniQuote);
      var twitterURL = "https://twitter.com/intent/tweet?text="+ trenutniQuote + "   - " + trenutniAutor;
        window.open(twitterURL);
    });
  
});

//Funkcija za GET request citata
function uzmiCitat(){
    $.getJSON("https://api.quotable.io/random", function(a) {
        $("#citatDiv").html( '"'+ a.content +'"' );
        $("#authorDiv").html("-" + a.author );
        trenutniQuote=a.content;
        trenutniAutor=a.author;
    });
};

