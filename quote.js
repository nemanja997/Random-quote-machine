//Promenljive za cuvanje citata
var trenutniQuote;
var trenutniAutor;

$(document).ready(function() {
  
  //Uzimanje citata na pocetku
    uzmiCitat();
  //Uzimanje citata pritiskom na dugme
    $("#dugme").on("click", function(){
      uzmiCitat();
    });
  //Postavljanje citata na Twitter
    $("#tviter").on("click", function(){
        window.location.href = "http://twitter.com/home?status="+"''"+trenutniQuote+"''"+ "   -"+trenutniAutor; 
    });
  
});

//Funkcija za GET request citata
function uzmiCitat(){
  $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(a) {
          $("#citat").html("<p>''" + a.quote +"''</p>" );
          $("#autor1").html("<p>-" + a.author +"</p>" );
          trenutniQuote=a.quote;
          trenutniAutor=a.autor;
    });
};

