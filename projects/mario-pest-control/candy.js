function calculate1() {
    
    var baddies_caught = (document.getElementById("text1").value);
    var coins = (document.getElementById("text4").value);
    var total1 = baddies_caught * coins;
    document.getElementById("text7").value = total1;   
}



function calculate2() {
    var baddies_caught = (document.getElementById("text2").value);
    var coins = (document.getElementById("text5").value);
    var total2 = baddies_caught * coins;
    document.getElementById("text8").value = total2;   
    
}


function calculate3() {
    var baddies_caught = (document.getElementById("text3").value);
    var coins = (document.getElementById("text6").value);
    var total3 = baddies_caught * coins;
    document.getElementById("text9").value = total3;   
    
}


function grandTotal(){
    
    var total1 = parseInt(document.getElementById("text7").value);
    var total2 = parseInt(document.getElementById("text8").value);
    var total3 = parseInt(document.getElementById("text9").value);
    var grandTotal = total1 + total2 + total3;
    document.getElementById("text88").value= grandTotal;
}
