$(document).ready(function(){
  $('.signlinks a').click(function(e){
	  e.preventDefault();
    $('.signlinks a').removeClass("active1");
    $(this).addClass("active1");
});
 $('a.optionlink').click(function(){
    $('a.optionlink').removeClass("active3");
    $(this).addClass("active3");
});

});

// $(document).ready(function(){
// $(".coloblack li a").each(function() {
    // if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
        // $(this).addClass('activeMenuItem');
    // }
// });
// });


	$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth: 1200,
     minSlides: 2,
    maxSlides: 2,
    moveSlides: 1,
    auto: true
  });
});
$(document).ready(function(){
	$(".hovercard").find(".card").hover(function(){
		$(this).closest(".hovercard").find(".carousel-control-prev , .carousel-control-next").css("opacity", "0.8")}, function(){
    $(this).closest(".hovercard").find(".carousel-control-prev, .carousel-control-next").css("opacity", "0")
  });
 
});
		