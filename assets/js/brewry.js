$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(data){
      var results =data;
      console.log(data)
  });