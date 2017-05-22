    //var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];  
    //
    //function attemptCall(name, dontCall, call, sendText) {
    //    if(name.length % 2 !==0)
    //}
    //
    //for(){
    //    attemptCall();
    //}
    //if the length of nme is odd invoke dontcall
    //if the length of name is even invoke call
    //if the name has more than one "a" sendText




    var names = ["Anna", "Fufu", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];  

    for(var i=0; i< name.length; i++) {
        attemptCall(names[i], creeperList, babeList)
    }
        //DONT CALL function
    function creeperList(name){
        console.log(name[i] + ' is a crepper dont call!!')
    }

    //call function
    function babeList(name){
      console.log(names[i] + " is a babe, make me call!!!")
    }


    function attemptCall(name, dontCall, call, sendText) {
        if (name.length % 2 !== 0) {
            dontCall();
        } else if(name.length % 2 === 0){
            call();
        }

    }