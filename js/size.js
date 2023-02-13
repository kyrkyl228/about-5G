function width(){
    if(document.documentElement.clientWidth <= 1100){
        let a = document.documentElement.clientWidth/1920;
        $("body").css("zoom", a);
        // alert(a);
    }else if(document.documentElement.clientWidth >= 1100){
        $("body").css("zoom", 1);

    }
}

$(document).ready(function(){
    width()
});

$(window).resize(function(){
    width();   
});