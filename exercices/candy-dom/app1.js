function addCandeh(){
    
    var input = document.getElementById('new-candy');
    var text  = document.createTextNode(input.value);
    var li  = document.createElement('li');
    li.appendChild(text);
    document.getElementById('candy-list').appendChild(li);
    
    
}