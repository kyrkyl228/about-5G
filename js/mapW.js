function mod(but, color){
    $(".Null").css("fill", "#d2dcde");
    $(".Null").css("background-color", "white");
    $("."+but+"").css("fill", color);
    $("."+but+"-back-but").css("background-color", color);
}

$(".map svg *").hover(function(event){
    const a = 20;

    $('.wrapper').append(`
        <div id="map-info" style="overflow:hidden; display: flex; position:absolute; top: ${event.pageY / $(".wrapper").css("zoom") - a - parseInt($("#map-info").css("height"), 10)}px; left: ${event.pageX / $(".wrapper").css("zoom") - a - parseInt($("#map-info").css("width"), 10)}px; background-color: #f0f8ffc0; border-radius: 7px; width: 120px; height: 50px;">
            <p style="margin: auto; font-size: 20px">${$(this).attr('name')}</p>
        </div>
    `);
    $("body").mousemove(function(event){
        if($("#map-info").css("top") != event.pageY / $(".wrapper").css("zoom") - a - parseInt($("#map-info").css("height"), 10) || $("#map-info").css("left") != event.pageX / $(".wrapper").css("zoom") - a - parseInt($("#map-info").css("width"), 10)){
            $("#map-info").css("top", event.pageY / $(".wrapper").css("zoom") - a - parseInt($("#map-info").css("height"), 10));
            $("#map-info").css("left", event.pageX / $(".wrapper").css("zoom") - a - parseInt($("#map-info").css("width"), 10));
        }        
    });

}, function(){
    $("#map-info").remove();
});
