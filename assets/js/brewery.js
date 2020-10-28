// Mathew Harris Created
// Ajax call to grab info from the brewery API
$(document).ready(function () {
    // var APIKey = "4952f70986ff85965585395731129d9a";





});

// Hisham Kader Created
// Ajax call to grab info from the omdb API
$(document).ready(function () {
    // START GLOBAL VARIABLES


    // END GLOBAL VARIABLES

    // START FUNCTIONS


    function displayMovieInfo() {
        var movie = $("#searchBar").val();
        // OMDB API Request
        var queryURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=e80d9e49";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            
            //console.log(title);
            var masterArray = [];

            // TITLE
            var title = response.Title;
            titleArray = [];

            // Function generates a code based off of the title
            // THE MATRIX
            //function titleCode(n) {
            var a = title.indexOf('a') // 5
            var e = title.indexOf('e') // 2
            var i = title.indexOf('i') // 8
            var o = title.indexOf('o')
            var u = title.indexOf('u')

            var titleCodeInt = (a + e + i + o + u);
            //console.log(a);
            //console.log(e);
            //console.log(i);
            //console.log(o);
            //console.log(u);
            console.log(titleCodeInt);

            masterArray.push(titleCodeInt);
            //};

            // Calls Function
            //titleCode(title);

            // RELEASE YEAR
            var releaseYear = response.Year[2];
            //releaseYearCodeArray = [];
            console.log(response.Year);
            console.log(releaseYear);
            var releaseYearInt = parseInt(releaseYear);
            console.log(releaseYearInt);

            // Function generates an Array based off of the year of the release year
            // function releaseYearCode() {




            //     // for (var i = 0; i < 4; i++) {


            //     //     // var num = releaseYear[i];
            //     //     // //console.log(releaseYear[i]);
            //     //     // var numInt = parseInt(num);
            //     //     // releaseYearCodeArray.push(numInt);

            //     // }
            // };

            //releaseYearCode(releaseYear);
            //console.log(releaseYearCodeArray);
            //masterArray.push(releaseYearCodeArray);


            var runTime = response.Runtime;
            var runTimeInt = parseInt(runTime);
            //console.log(runTimeInt);


            if (runTimeInt < 120) {
                var ibu = "-50";
            } else if (runTimeInt > 120) {
                var ibu = "+50";
            };

            console.log(ibu);

            //movieMatch();

            // MOVIE TITLE TO BEER ABV LEVEL
            var titleCodeInt1 = titleCodeInt;

            if (titleCodeInt1 < 20) {
                var abv = "-10";
            } else {
                var abv = "+10";
            }

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
            // };

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
                console.log(response);
                console.log(response.data.title);
            })



        });


    };

    // function movieMatch() {

    //     var masterArray = [];

    //     // TITLE
    //     //var title = response.Title;
    //     titleArray = [];

    //     // Function generates a code based off of the title
    //     function titleCode(n) {
    //         var a = title.indexOf('a')
    //         var e = title.indexOf('e')
    //         var i = title.indexOf('i')
    //         var o = title.indexOf('o')
    //         var u = title.indexOf('u')

    //         var titleCodeInt = (a + e + i + o + u);
    //         console.log(titleCodeInt);
    //         masterArray.push(titleCodeInt);
    //     };

    //     // Calls Function
    //     titleCode(title);

    //     // RELEASE YEAR
    //     var releaseYear = response.Released;
    //     releaseYearCodeArray = [];

    //     // Function generates an Array based off of the year of the release year
    //     function releaseYearCode() {
    //         for (var i = 0; i < releaseYear.length; i++) {
    //             var num = releaseYear[i];
    //             //console.log(releaseYear[i]);
    //             var numInt = parseInt(num);
    //             releaseYearCodeArray.push(numInt);

    //         }
    //     };

    //     releaseYearCode(releaseYear);
    //     console.log(releaseYearCodeArray);
    //     masterArray.push(releaseYearCodeArray);


    //     var runTime = response.Runtime;
    //     var runTimeInt = parseInt(runTime);
    //     console.log(runTimeInt);

    //     function runTimeCode() {
    //         if (runTimeInt < 50) {
    //             var runTimeIntCode = 5;
    //         } else if (runTimeInt > 50 && runTimeInt < 100) {
    //             var runTimeIntCode = 10;
    //         } else if (runTimeInt > 100 && runTimeInt < 200) {
    //             var runTimeIntCode = 15;
    //         } else if (runTimeInt > 200) {
    //             var runTimeIntCode = 20;
    //         };
    //         console.log(runTimeIntCode);
    //         masterArray.push(runTimeIntCode);

    //     };

    //     runTimeCode();


    //     console.log(masterArray);

    //     // 

    //     // {"Title":"The Matrix",
    //     // "Year":"1999",
    //     // "Rated":"R",
    //     // "Released":"31 Mar 1999",
    //     // "Runtime":"136 min",
    //     // "Genre":"Action, Sci-Fi",
    //     // "Director":"Lana Wachowski, Lilly Wachowski",
    //     // "Writer":"Lilly Wachowski, Lana Wachowski",
    //     // "Actors":"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
    //     // "Plot":"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    //     // "Language":"English",
    //     // "Country":"USA",
    //     // "Awards":"Won 4 Oscars. Another 37 wins & 51 nominations.",
    //     // "Poster":"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    //     // "Ratings":[{"Source":"Internet Movie Database",
    //     // "Value":"8.7/10"},{"Source":"Rotten Tomatoes",
    //     // "Value":"88%"},
    //     // {"Source":"Metacritic","Value":"73/100"}],
    //     // "Metascore":"73","imdbRating":"8.7",
    //     // "imdbVotes":"1,639,488","imdbID":"tt0133093",
    //     // "Type":"movie","DVD":"N/A","BoxOffice":"N/A",
    //     // "Production":"Village Roadshow Prod., Silver Pictures","Website":"N/A",
    //     // "Response":"True"}

    // };

    // END FUNCTIONS

    // START CLICK FUNCTIONS

    $("#searchBarButton").on("click", displayMovieInfo);



    // END CLICK FUNCTIONS

});


