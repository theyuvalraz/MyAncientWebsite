$(document).ready(function(){
    $(".workExp").hide();
    $(".militaryService").hide();
    $(".education").hide();
    $(".skills").hide();
    
    $("#workExpOpen").css('cursor', 'pointer').click(function(){
        $(".workExp").slideToggle("slow");
        $("html, body").delay(500).animate({
            scrollTop: $("#workExpOpen").offset().top
        }, 500);
    });
    $("#militaryServiceOpen").css('cursor', 'pointer').click(function(){
        $(".militaryService").slideToggle("slow");
        $("html, body").delay(500).animate({
            scrollTop: $("#militaryServiceOpen").offset().top
        }, 500);
    });
    $("#educationOpen").css('cursor', 'pointer').click(function(){
        $(".education").slideToggle("slow");
        $("html, body").delay(500).animate({
            scrollTop: $("#educationOpen").offset().top
        }, 500);
    });
    $("#skillsOpen").css('cursor', 'pointer').click(function(){
        $(".skills").slideToggle("slow");
        $("html, body").delay(500).animate({
            scrollTop: $("#skillsOpen").offset().top
        }, 500);
    });
});