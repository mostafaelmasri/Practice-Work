
var health = 100;
var health2 = 100;
document.querySelector("#p1").innerHTML = health;
document.querySelector("#p2").innerHTML = health;


document.querySelector(".btn1").addEventListener("click", function(){
    health--;
    document.querySelector("#p1").innerHTML = health;
})

document.querySelector(".btn2").addEventListener("click", function() {
    health2--;
    document.querySelector("#p2").innerHTML = health2;
})

