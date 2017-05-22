for (var i = 1; i < 11; i++){
    $.get("http://swapi.co/api/people/" + i, function(result) {
    setTimeout(function(){
        
          $(".result").append("<p>" + result.name + "  </p> ");
        
    }, 5000 )
    })
}






//
//$.get("http://swapi.co/api/people/", function (result) {
//    console.log(result)
//    $(".result").append("<p>" + result + "  </p> ");
//    alert("Load was performed.");
//});