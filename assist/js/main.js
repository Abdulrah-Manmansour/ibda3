$(document).ready(function(){
    $(".siv-carousel").owlCarousel({
        loop:true,
        rtl:true,
        nav:true,
    margin:10,
    autoplay:true,
    autoplaySpeed:1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            margin:10
        },
        600:{
            items:1,
            nav:true,
            margin:-20
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }


    });
    $(".client-casroul").owlCarousel({
        loop:true,
        rtl:true,
        nav:true,
    
    autoplay:true,
    autoplaySpeed:1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            margin:90
        },
        600:{
            items:2,
            nav:true,
            margin:-20
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }


    });
    $('.navbar-toggler ,.owl-prev ,.owl-next ').click(function() {
        this.blur();
      });
  });