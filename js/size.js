function width(){
    if(document.documentElement.clientWidth <= 750){
        let a = document.documentElement.clientWidth/1920;
        $(".scale").css("zoom", a);
        $(".head").css("zoom", a);
        $(".scale").css("padding", "0px 10px");
        $(".navi").css("padding", "0 10px");
        $(".navi").css("width", "100%");
    }else{
        $(".scale").css("zoom", "");
        $(".head").css("zoom", "");
        $(".navi").css("width", "");
        $(".scale").css("padding", "");
        $(".navi").css("padding", "");
    }
}

$(document).ready(function(){
    width();
});

$(window).resize(function(){
    width();   
});