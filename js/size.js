function width(){
    let a = document.documentElement.clientWidth/1920;
    $("body").css("zoom", a);
    console.log(a);
}

$(document).ready(function(){
    width()
});

$(window).resize(function(){
    width();
});