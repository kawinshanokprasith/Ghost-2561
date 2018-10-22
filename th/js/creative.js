(function($) {
  "use strict"; // Start of use strict
  var first_time = true;
  $(".main").onepage_scroll({
    easing: "ease-in-out",
    afterMove: function(index){
      if(index === 2 && first_time){
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          // $(".before-slide").show();
          // slidePageup();
          first_time = false;
        }
      }
    }
  });
  $(document).off('mousewheel DOMMouseScroll MozMousePixelScroll');
  $('.main').off('touchstart swipeDown swipeUp');
  $(".main-nav .nav-link").click(function(){
    if($(this).data('about')){
      $(".sub-nav").show();
    }
    else{
      $(".sub-nav").hide();
    }
  });
  $(".sub-nav .nav-link").click(function(){
    $(".nav-first").attr("href",$(this).attr("href"));
  });
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
  $(".btn-mobile").click(function(){
    $(".before-slide").slideDown(2000);
    $(".before-slide").slideUp(2000);
  });
})(jQuery); // End of use strict
function moveToPage(goto){
  $(".main").moveTo(goto);
}
function slidePageup(){
  setTimeout(function (){
    $(".before-slide").slideUp(2000);
  }, 1000);
}
