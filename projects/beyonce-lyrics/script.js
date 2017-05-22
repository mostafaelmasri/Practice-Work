$(document).ready(function(){
    var likeBtnIndex = 0;
    var likesArr = [];
    $("#addBtn").on("click", function(){
        likesArr.push(0);
        
        var input = $("#input").val();
        $("ul").append("<li>" + input + " <button id='" + likeBtnIndex + "' data-count=0>like</button> <span></span></li>");
        
        $("#" + likeBtnIndex).on("click", function(){
            var likesNum = $(this).attr("data-count");
            console.log(likesNum);
            likesNum++;
            $(this).siblings().html(likesNum);
            $(this).attr("data-count", likesNum);
        });
        
        likeBtnIndex++
    });
    
});