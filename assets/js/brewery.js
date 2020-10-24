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

        movieMatch();
    }

    function movieMatch(){

        var masterArray = [];
        
        // TITLE
        var title = "The Lion King";
        titleArray = [];
        
        // Function generates a code based off of the title
        function titleCode(n) {
            var a = title.indexOf('a')
            var e = title.indexOf('e')
            var i = title.indexOf('i')
            var o = title.indexOf('o')
            var u = title.indexOf('u')
        
            var titleCodeInt = (a + e + i + o + u);
            console.log(titleCodeInt);
            masterArray.push(titleCodeInt);
        };
        
        // Calls Function
        titleCode(title);
        
        // RELEASE YEAR
        var releaseYear = "1992";
        releaseYearCodeArray = [];
        
        // Function generates an Array based off of the year of the release year
        function releaseYearCode() {
            for (var i = 0; i < 4; i++) {
                var num = releaseYear[i];
                //console.log(releaseYear[i]);
                var numInt = parseInt(num);
                releaseYearCodeArray.push(numInt);
                
            }
        };
        
        releaseYearCode(releaseYear);
        console.log(releaseYearCodeArray);
        masterArray.push(releaseYearCodeArray);
        
        
        var runTime = "136 min"
        var runTimeInt = parseInt(runTime);
        console.log(runTimeInt);
        
        function runTimeCode(){
            if (runTimeInt < 50) {
                var runTimeIntCode = 5;
            } else if (runTimeInt > 50 && runTimeInt < 100) {
                var runTimeIntCode = 10;
            } else if (runTimeInt > 100 && runTimeInt < 200) {
                var runTimeIntCode = 15;
            } else if (runTimeInt > 200) {
                var runTimeIntCode = 20;
            };
            console.log(runTimeIntCode);
            masterArray.push(runTimeIntCode);
        
        };
        
        runTimeCode();
        
        
        console.log(masterArray);
        
        // 
        
        // {"Title":"The Matrix",
        // "Year":"1999",
        // "Rated":"R",
        // "Released":"31 Mar 1999",
        // "Runtime":"136 min",
        // "Genre":"Action, Sci-Fi",
        // "Director":"Lana Wachowski, Lilly Wachowski",
        // "Writer":"Lilly Wachowski, Lana Wachowski",
        // "Actors":"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
        // "Plot":"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        // "Language":"English",
        // "Country":"USA",
        // "Awards":"Won 4 Oscars. Another 37 wins & 51 nominations.",
        // "Poster":"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        // "Ratings":[{"Source":"Internet Movie Database",
        // "Value":"8.7/10"},{"Source":"Rotten Tomatoes",
        // "Value":"88%"},
        // {"Source":"Metacritic","Value":"73/100"}],
        // "Metascore":"73","imdbRating":"8.7",
        // "imdbVotes":"1,639,488","imdbID":"tt0133093",
        // "Type":"movie","DVD":"N/A","BoxOffice":"N/A",
        // "Production":"Village Roadshow Prod., Silver Pictures","Website":"N/A",
        // "Response":"True"}
        
        };

    // END FUNCTIONS

    // START CLICK FUNCTIONS

    $("#searchBarButton").on("click", displayMovieInfo)

    

    // END CLICK FUNCTIONS

});


