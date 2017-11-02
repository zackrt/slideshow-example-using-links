function startSlideshow() {
    "use strict";
    
    //first, cache the div holding our slide show
    var $slideshow = $("#slideshow");
    
    //now, let's get our slides, represented by divs
    var $slides = $("div", $slideshow);

    //current slide
    var currentSlide = 0;
    //max
    var maxSlides = $slides.length;
    //now, show the first one
    $slides.eq(0).show();
    
    //respond to clicks on the links
    $("#nextLink").on("click", function(e) {
        e.preventDefault();
        if(currentSlide+1 === maxSlides) return false;
        $slides.eq(currentSlide).hide();
        currentSlide++;
        $slides.eq(currentSlide).show();
    });
    $("#prevLink").on("click", function(e) {
        e.preventDefault();
        if(currentSlide === 0) return false;
        $slides.eq(currentSlide).hide();
        currentSlide--;
        $slides.eq(currentSlide).show();
    });
}
$(startSlideshow);