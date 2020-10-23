var queryURL = "http://sandbox-api.brewerydb.com/v2/beer/random?&apikey=c2c6d01c8bbe3417a46c5116a254b6af";

$.ajax({
    url: "https://limitless-tor-79246.herokuapp.com/cors",
   method:"POST",
   data: {
       url: queryURL,
        method: "GET",
       key: "DB4868A0E1958DD298798EF1086835163AB3ED38D909D7A97BF3611FF87CD4DB"
   }}).then(function(response){
       console.log(response);
   });

