$(document).ready(function () {


    function displayMovieInfo() {

       
        var apiKey = "e80d9e49";
        var queryURL = "https://www.omdbapi.com/?api-key=" + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                console.log(response)


            });
    };
    
    displayMovieInfo();
});