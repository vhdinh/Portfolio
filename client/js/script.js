$(document).ready(function(){

    $(".button-collapse").sideNav();
    // $('.parallax').parallax();


    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          // $(this).css("text-decoration", "underline")
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });


    //Video DemoModal
    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
    }
    );


    //Check to see if the window is top if not then display button
    //smooth scroll function
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
            $('.main_caption').fadeOut("fast");
            $('.main_caption1').fadeOut("fast");
        } 
        else {
            $('.scrollToTop').fadeOut();
            $('.main_caption').fadeIn("fast");
            $('.main_caption1').fadeIn("fast");
            // $(".brand-logo li a").removeClass("active")
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        $(".brand-logo li a").removeClass("active")

        return false;
    });


    $('.slider').slider({full_width: false});
    // Pause slider
    $('.slider').slider('pause');
    // Start slider
    $('.slider').slider('start');
    // Next slide
    $('.slider').slider('next');
    // Previous slide
    $('.slider').slider('prev');
      


    $(".nav-wrapper li a").click(function(){
      $(".nav-wrapper li a").removeClass("active")
      $(this).addClass("active")
    })

    // $('div').mouseenter(function() {
    //   $(".nav-wrapper li a").removeClass("active")

    //   $('nav a[href="#'+$(this).attr('id')+'"]').addClass('active').siblings('nav a').removeClass('active');
    // });

})