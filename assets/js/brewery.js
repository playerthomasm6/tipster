// Mathew Harris Created
// Ajax call to grab info from the brewery API
$(document).ready(function () {

    
    // var APIKey = "4952f70986ff85965585395731129d9a";
    var queryURL = "https://sandbox-api.brewerydb.com/v2/beer/random/?year2000-2015&abv=+10&key=4952f70986ff85965585395731129d9a";
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