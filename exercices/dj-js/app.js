var djBox = document.getElementById("box");
//turn red
djBox.addEventListener("mousedown", function() {
                       
djBox.style.backgroundColor = "red";
  });

//turn blue
djBox.addEventListener("mouseenter", turnBlue )
function turnBlue() {
    djBox.style.backgroundColor = "blue";
    djBox.style.fontSize = "50px";
}

//turn yellow
djBox.addEventListener("mouseup", turnYellow )
function turnYellow() {
    djBox.style.backgroundColor = "Yellow";
}

