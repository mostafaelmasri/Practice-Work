var xhr = new XMLHttpRequest();

 xhr.onreadystatechange = function () {
     
      if (xhr.readyState == 4 && 
          xhr.status == 200) {
          
            var jsonData =
            xhr.responseText;
            var data =
            JSON.parse(jsonData);
            document.getElementById("name").innerHTML = data.name;
      }
 }
 xhr.open("GET", "http://swapi.co/api/people/14/",true);
 xhr.send();