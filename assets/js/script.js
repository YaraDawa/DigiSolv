// $(document).ready(function () {
//     $("h1").click(function () {
//         $(this).css("color","#ff0ff0");
//     });
// });
// adding sticky nav
$(document).ready(function () {
    $(".about-section").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky-nav");
        }
        else{
            $("nav").removeClass("sticky-nav");
        }
        
    })
    });

    // annimation in scroll
    
    $(".js--about-section").waypoint(function(direction){
        $(".js--about-box").addClass("animate__animated animate__fadeIn");


    },{
        offset:'50%'
    });

    