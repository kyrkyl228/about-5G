function width(){
    if(document.documentElement.clientWidth <= 1100 - (window.innerWidth - document.documentElement.clientWidth)){
        let a = document.documentElement.clientWidth/1920;
        $("body").css?v1t("zoom", a);
    }else if(document.documentElement.clientWidth >= 1100 - (window.innerWidth - document.documentElement.clientWidth)){
        $("body").css?v1t("zoom", 1);

    }
    console.log();
}

$(document).ready(function(){
    width()
});

$(window).resize(function(){
    width();   
});