// Hisham Kader Created
// Ajax call to grab info from the omdb API
$(document).ready(function () {
    // START GLOBAL VARIABLES
    var masterArray = [];

    


    // END GLOBAL VARIABLES

    // START FUNCTIONS

    // Grabbing the Movie title and passing it through
    function getMovieTitle(title) {
        var a = title.indexOf('a') // 5
        var e = title.indexOf('e') // 2
        var i = title.indexOf('i') // 8
        var o = title.indexOf('o')
        var u = title.indexOf('u')

        return (a + e + i + o + u);

    };
    // FUNCTION: turns titleCodeInt to abv value
    function titleCodeToAbv(x, n) {
        if (x < n) {
            return "-10";
        };
        return "+10";
    };

    // Function turns runTime to ibu value
    function runTimeToIBU(runTime, num) {
        if (runTime < num) {
            return "-50"
        }

        return "+50"
    };

    function displayMovieInfo() {
        
        $("#movieResult").empty();
        $("#beerResult").empty();

        var movie = $("#searchBar").val();
        // OMDB API Request
        var queryURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=e80d9e49";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // ADDING MOVIE INFO TO HTML
            var newMovieDiv = $("<div>").attr("id", "newMovieDiv");
            var moviePoster = $("<img>").attr("src", response.Poster);
            moviePoster.attr("id", "small-picture");

            newMovieDiv.append(moviePoster);
            $("#movieResult").append(newMovieDiv);
            

            var title = response.Title;

            var titleCodeInt = getMovieTitle(title);

            console.log(titleCodeInt);
            masterArray.push(titleCodeInt);
            console.log(masterArray);

            // RELEASE YEAR
            var releaseYear = response.Year[2];
            console.log(response.Year);
            console.log(releaseYear);
            var releaseYearInt = parseInt(releaseYear);
            console.log(releaseYearInt);


            var runTime = response.Runtime;
            var runTimeInt = parseInt(runTime);
            //console.log(runTimeInt);

            var ibu = runTimeToIBU(runTimeInt, 120)

            console.log(ibu);

            //movieMatch();

            // MOVIE TITLE TO BEER ABV LEVEL
            var titleCodeInt1 = titleCodeInt;

            var abv = titleCodeToAbv(titleCodeInt1, 20);

            // FUNCTION that would have used the movie year but the API did not work
            function movieYearToBeerYear() {
                // MOVIE RELEASE YEAR TO BEER RELEASE SPAN
                // 1990s
                // if (releaseYearInt === 9) {
                //     var beerYear = "1990-1999";
                //     console.log("Beer from the 90s")
                //     // 2000s
                // } else if (releaseYearInt === 0) {
                //     var beerYear = "2000-2009";
                //     console.log("Beer from the 2000s")
                //     // 2010s
                // } else if (releaseYearInt === 1) {
                //     var beerYear = "2010-2019";
                //     console.log("Beer from the 2010s")
                //     // 2020s
                // } else if (releaseYearInt === 2) {
                //     var beerYear = "2020-2029";
                //     console.log("Beer from the 2020s")
                // } else {
                //     beerYear = "1960-1989";
                //     console.log("Beer from the past")
                //};
            };

            // Brewery API request
            var queryURL = "https://sandbox-api.brewerydb.com/v2/beer/random/?abv=" + abv + "&ibu=" + ibu + "&key=4952f70986ff85965585395731129d9a";

            $.ajax({
                url: "https://limitless-tor-79246.herokuapp.com/cors",
                method: "POST",
                data: {
                    url: queryURL,
                    method: "GET",
                    key: "DB4868A0E1958DD298798EF1086835163AB3ED38D909D7A97BF3611FF87CD4DB"
                }
            }).then(function (response) {

                if (!response.data) {
                   var noBeerForYou = $("<h1>").text("You should watch this movie sober...");
                   $("#beerResult").append(noBeerForYou);
                };

                console.log(response);
                var beerName = response.data.nameDisplay;
                var ABV = response.data.abv;
                var beerDescrtiption = response.data.style.description;
                console.log(beerName);
                console.log(ABV);
                console.log(beerDescrtiption);
                var nameEl = $("<h5 class='card-title'>").text(beerName);
                var AbvEl = $("<h5 class='card-title'>").text(ABV);
                var descriptionEl = $("<p class='card-title'>").text(beerDescrtiption);
                $("#beerResult").append("Beer Name: ",nameEl);
                $("#beerResult").append("ABV:",AbvEl);
                $("#beerResult").append("Description:",descriptionEl);
                console.log(response);
                console.log(response.data.title);
            });

            

        });


    };

    // END FUNCTIONS

    // START CLICK FUNCTIONS

    $("#searchBarButton").on("click", displayMovieInfo);
    
    $("#searchBar").keypress(function (event){
        if (event.keyCode === 13) {
            $("#searchBarButton").click();
        }
    });



    // END CLICK FUNCTIONS

});


