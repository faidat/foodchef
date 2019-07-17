$(document).ready(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll > 300){
            $(".navigation").css("background", "#9ec208" );
        }
        else{
            $(".navigation").css("background", "rgba(0, 0, 0, 0.479)" );
        }
    });
});