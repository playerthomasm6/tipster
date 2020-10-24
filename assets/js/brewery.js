// Mathew Harris Created
// Ajax call to grab info from the brewery API
$(document).ready(function () {
    // var APIKey = "4952f70986ff85965585395731129d9a";


    var queryURL = "https://sandbox-api.brewerydb.com/v2/beer/random?key=4952f70986ff85965585395731129d9a";
    $.ajax({
        url: "https://limitless-tor-79246.herokuapp.com/cors",
        method: "POST",
        data: {
            url: queryURL,
            method: "GET",
            key: "DB4868A0E1958DD298798EF1086835163AB3ED38D909D7A97BF3611FF87CD4DB"
        }
    }).then(function (response) {
        console.log(response);
        console.log(response.data.title);
    })



});

// Hisham Kader Created
// Ajax call to grab info from the omdb API
$(document).ready(function () {
    // START GLOBAL VARIABLES


    // END GLOBAL VARIABLES

    // START FUNCTIONS


    function displayMovieInfo() {
        var movie = $("#searchBar").val();
        var queryURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=e80d9e49";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
        });


    }

    // END FUNCTIONS

    // START CLICK FUNCTIONS

    $("#searchBarButton").on("click", displayMovieInfo)

    // END CLICK FUNCTIONS

});


