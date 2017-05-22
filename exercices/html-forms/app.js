var button = document.querySelector("#myButton");

button.addEventListener("click", function() {
    var form= document.querySelector("#myForm");
    console.log(form.firstNm.value);
    
    alert("First Name: " + form.firstNm.value + "\n Last Name: " + form.lastNm.value+
         "\n Age: " + form.age.value + 
         "\n Gender: " + form.gender.value);
    
});