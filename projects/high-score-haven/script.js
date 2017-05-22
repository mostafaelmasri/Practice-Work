document.querySelector("#submit").addEventListener('click', function () {
    var form = document.querySelector('form');
    var nameVal = form['name'].value;
    var highscoreVal = form["highsc"].value;
    var radioButton = form["checkbox"];
    var gameSelect = form["game"].value;
    var dateThing = form["date"].value;

var tr = document.createElement("tr");
var trash;
 
if (radioButton.checked){
trash = trashGenerator();    
} else {
trash ="" ;
}
    
    
    
    
  tr.innerHTML = `

<td>${nameVal}</td>   




<td>${gameSelect}</td>  



<td>${highscoreVal}</td> 

<td>${dateThing}</td>

<td>${trash}</td>








     
`;
document.querySelector('table').appendChild(tr);
    
    
})

function trashGenerator(){
    var trashTalks = ["the thing","almighty", "KO", "THe roCK", "the king of Sniper","zorba the pokemon surfer"];
    //use math random
 var num = Math.floor(Math.random()* trashTalks.length);
    
    var render = trashTalks[num];
  return render;
  }