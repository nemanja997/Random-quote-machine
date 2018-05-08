$(document).ready(function() {

    $("#dugme").on("click", function(){
       $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(a) {
          $("#citat").html("<p>''" + a.quote +"''</p>" );
          $("#autor1").html("<p>-" + a.author +"</p>" );
       });
    });
   
});

