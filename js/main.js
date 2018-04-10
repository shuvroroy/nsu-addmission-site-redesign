$(document).ready(function() {
  var stickyOffset = $('#navbar-primary').offset().top;

  $(window).scroll(function(){
    var sticky = $('#navbar-primary'),
        scroll = $(window).scrollTop();

    if (scroll >= stickyOffset) sticky.addClass('navbar-fixed-top');
    else sticky.removeClass('navbar-fixed-top');
  });

  $("#owl-demo").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
  });

});
