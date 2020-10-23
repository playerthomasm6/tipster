+$(document).ready(function(){


    function displayMovieInfo() {
    
        var movie = $(this).attr("data-name");
        // var result = movie.replace(/ /g, "+")
         
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=e80d9e49";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            
    
        });
    };
    displayMovieInfo();
    });