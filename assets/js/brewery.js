$(document).ready(function(){

    // var APIKey = "4952f70986ff85965585395731129d9a";
    var queryURL = "https://sandbox-api.brewerydb.com/v2/beer/random?key=4952f70986ff85965585395731129d9a";
    

    $.ajax({
             url: "https://limitless-tor-79246.herokuapp.com/cors",
            method:"POST",
            data: {
                url: queryURL,
                 method: "GET",
                key: "DB4868A0E1958DD298798EF1086835163AB3ED38D909D7A97BF3611FF87CD4DB"
            }}).then(function(response){
                console.log(response);
                var beerName = response.data.nameDisplay;
                var ABV = response.data.abv;
                var beerDescrtiption = response.data.style.description;
                console.log(beerName);
                console.log(ABV);
                console.log(beerDescrtiption);

                var nameEl = $("<h5 class='card-title'>").text(beerName);
                var AbvEl = $("<h5 class='card-title'>").text(ABV);
                var descriptionEl = $("<h5 class='card-title'>").text(beerDescrtiption);

                $("#beerResult").append("Beer Name:",nameEl);
                $("#beerResult").append("ABV:",AbvEl);
                $("#beerResult").append("Description:",descriptionEl);



                
                
                
            })
        });
        