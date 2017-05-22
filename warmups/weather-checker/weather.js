function mytemp(weather, temperature){
    if (weather === "rainy" && temperature > 15)
        console.log("Bring umberella");

   else if (weather === "rainy" && temperature < 15){
 console.log("Bring umberella and jacket");
}

else if (weather === "sunny" && temperature > 15) {
    console.log("wear a tshirt");
}
 else if (weather==="sunny" || weather==="rainy" && temperature> 19){
        console.log("wear a tshirt");
 }
    
}


mytemp('sunny', 16);
    
//    function(){
//        if(...){
//            .....
//        } else if(...){
//            ...
//        } else if(...){
//                  
//                  }
//    }
                  
                