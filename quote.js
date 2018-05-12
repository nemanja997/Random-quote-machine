$(document).ready(function() {
  //Promenljive za cuvanje citata
    var trenutniQuote;
    var trenutniAutor;
  //GET request za citat na pocetku
    $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(a) {
          $("#citat").html("<p>''" + a.quote +"''</p>" );
          $("#autor1").html("<p>-" + a.author +"</p>" );
          trenutniQuote=a.quote;
          trenutniAutor=a.autor;
    });
  //GET request za novi citat pritiskom na dugme
    $("#dugme").on("click", function(){
       $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(a) {
          $("#citat").html("<p>''" + a.quote +"''</p>" );
          $("#autor1").html("<p>-" + a.author +"</p>" );
          trenutniQuote=a.quote;
          trenutniAutor=a.autor;
       });
    });

  //Postavljanje citata na Twitter
    $("#tviter").on("click", function(){
        window.location.href = "http://twitter.com/home?status="+"''"+trenutniQuote+"''"+ "   -"+trenutniAutor; 
    });


   
});

