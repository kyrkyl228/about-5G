function mod(but, color) {
  $(".Null").css("fill", "#d2dcde");
  $(".Null").css("background-color", "white");
  $("." + but + "").css("fill", color);
  $("." + but + "-back-but").css("background-color", color);
}

$(".map svg *").hover(
  function (event) {
    const a = 10;

    $(".wrapper").append(`
        <div id="map-info" style="overflow:hidden; display: flex; position:absolute; top: ${
          event.pageY / $(".wrapper").css("zoom") -
          a -
          parseInt($("#map-info").css("height"), 10)
        }px; left: ${
      event.pageX / $(".wrapper").css("zoom") -
      a -
      parseInt($("#map-info").css("width"), 10)
    }px; background-color: #f0f8ffc0; border-radius: 7px; width: 120px; height: 50px;">
            <p style="margin: auto; font-size: 20px">${$(this).attr("name")}</p>
        </div>
    `);
    $("body").mousemove(function (event) {
      if (
        $("#map-info").css("top") !=
          event.pageY / $(".wrapper").css("zoom") -
            a -
            parseInt($("#map-info").css("height"), 10) ||
        $("#map-info").css("left") !=
          event.pageX / $(".wrapper").css("zoom") -
            a -
            parseInt($("#map-info").css("width"), 10)
      ) {
        $("#map-info").css(
          "top",
          event.pageY / $(".wrapper").css("zoom") -
            a -
            parseInt($("#map-info").css("height"), 10)
        );
        $("#map-info").css(
          "left",
          event.pageX / $(".wrapper").css("zoom") -
            a -
            parseInt($("#map-info").css("width"), 10)
        );
      }
    });
  },
  function () {
    $("#map-info").remove();
  }
);


$(".map__plus").click(function(){
    let a = Number($("#map-id").css("scale")) + Number(0.5);
    $("#map-id").css('scale', String(a));
});

$(".map__minus").click(function(){
    let a = Number($("#map-id").css("scale")) - Number(0.5);
    $("#map-id").css('scale', String(a));
});

// $(".map").mousemove(function(event){
//     $(".map").mousedown(function(event){
//         let x = event.pageX / $(".wrapper").css("zoom");
//         let y = event.pageY / $(".wrapper").css("zoom");
//         console.log(x);
//         console.log(y);
//         console.log(event.pageX / $(".wrapper").css("zoom"));
//     });
//     console.log(event.pageX / $(".wrapper").css("zoom"));
// });

let a = 0;
let left = 0;
let topY = 0;
let vek = [[0, 1], [0, 0]];

$(".map").mousedown(function(event){
    a = 1;
    let x = event.pageX / $(".wrapper").css("zoom");
    let y = event.pageY / $(".wrapper").css("zoom");
    vek = [[x, y], [0, 0]];
    // console.log(x);
    // console.log(y);
    $(".map").mousemove(function(event){
        if(a != 0){
            // let Vx = Number(parseInt($("#map-id").css("left"), 10)) - x + event.pageX / $(".wrapper").css("zoom");
            // $("#map-id").css('left', String(Vx));
            // console.log(Vx);
            // console.log(vek[0][1]);
            vek = [[x, y], [event.pageX / $(".wrapper").css("zoom"), event.pageY / $(".wrapper").css("zoom")]];
            Vx =vek[1][0] - vek[0][0];
            Vy =vek[1][1] - vek[0][1];
            // $("#map-id").css('left', String(Vx));
            $("#map-id").css('left', String(Vx + left));
            $("#map-id").css('top', String(Vy + topY));


            console.log(Vx);
            console.log($("#map-id").css('left'));
            // $("#map-id").css('left', String(Vx + Number(parseInt($("#map-id").css('left')), 10)));
        }

    });        
}).mouseup(function(){
    a = 0;
    left = Number(parseInt($("#map-id").css('left'), 10));
    topY = Number(parseInt($("#map-id").css('top'), 10));

});