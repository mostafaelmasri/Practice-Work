var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];


function myarr(airconditioner) {
    console.log(airconditioner);
}
//myarr(lyrics);

function uptown2(arr) {
    arr.reverse();
    console.log(arr);
    
}
uptown2(lyrics);

/////////////////////////////////////////////////////


function uptown(arr){
 for(var i=0;i <arr.length; i++){
     //condition checking for even number
     if(i % 2 !== 0){
         console.log(arr[i]);
     }
 }   
}
uptown(lyrics);