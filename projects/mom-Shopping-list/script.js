//window.addEventListener("keypress",function(e){
//    if (e.keyCode === 13) {
//        
//        var inputVal = document.querySelector("input").value;
//        var txtNode = document.createTextNode(inputVal);
//        var li = document.createElement('li');
//
//        var btn = document.createElement("button");
//        btn.innerHTML = 'X';
//        var ul = document.querySelector('ul');
//        ul.appendChild(li);
//        li.appendChild(txtNode);
//        li.appendChild(btn);
//    }
//})
$(window).addEventListener("keypress",function(e){
    if (e.keyCode ===13){
      var inputVal = document.querySelector("input").value;
       
      var txtNode = document.createTextNode(inputVal);
      var li = document.createElement('li');

      var btn = document.createElement("button");
       btn.innerHTML = 'X';
      var ul = document.querySelector('ul');
     ul.appendChild(li);
  li.appendChild(txtNode);
        li.appendChild(btn);
    }

$("#btn").addEventListener("click, function(){
 var inputVal = document.querySelector("input").value;
      var txtNode = document.createTextNode(inputVal);
        var li = document.createElement('li');
        var btn = document.createElement("button");
        btn.innerHTML = 'X';
        var ul = document.querySelector('ul');
        ul.appendChild(li);
       li.appendChild(txtNode);
       li.appendChild(btn);                          

});
    
    
})


//
//
//
//
//
//
//
//
//
//document.getElementById("btn").addEventListener("click", function () {
//        var inputVal = document.querySelector("input").value;
//        var txtNode = document.createTextNode(inputVal);
//        var li = document.createElement('li');
//
//        var btn = document.createElement("button");
//        btn.innerHTML = 'X';
//        var ul = document.querySelector('ul');
//        ul.appendChild(li);
//        li.appendChild(txtNode);
//        li.appendChild(btn);
//   
//    // add event listener to delete button
//
//    btn.addEventListener("click", function () {
//
//            ul.removeChild(this.parentElement)
//
//
//        });
// })
//
//  