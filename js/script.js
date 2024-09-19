// ....................preloader start..................
$(window).on("load", function () {
    setTimeout(function(){
        $('.preloader').fadeOut();
        $('.cd-transition-layer').addClass('closing').delay(1000).queue(function(){
            $(this).removeClass("visible closing opening").dequeue();
        });
    }, 1000);
});
// ....................preloader end..................

// ....................offcanvas start..................
$(document).ready(function(){
    $('.close-btn').on('click',function (){
        $('.menu').removeClass('amin');
    });
    $('.menubar').on('click',function (){
        $('.menu').addClass('amin');
    });
});
$(document).ready(function(){
    $('.nav-item button').on('mouseenter',function (){
        $('.offcanvas').css('background-image','linear-gradient(to bottom, #9cc11ae0, #9cc11ae0), url("../Images/side-menu.jpg")');
    });
    $('.nav-item button').on('mouseleave',function (){
        $('.offcanvas').css('background-image','linear-gradient(to bottom, rgba(5, 150, 161, 0.88), rgba(5, 150, 161, 0.88)), url("../Images/side-menu.jpg")');
    });
// ....................offcanvas start..................
// ....................scroll start..................

    // ....................scroll end..................


// ....................on scroll gsap start..................
gsap.to(".menubar",{
    backgroundColor:"#9CC11A",
    height:"60",
    width:"60",
    borderRadius:"50",
    scrollTrigger:{
        trigger:".menubar",
        scroller:"body",
        //  markers:true,
        start:"top -97%",
        end:"top -98%",
        scrub:true,
    }
})

// ....................on scroll gsap end..................

// ....................cursor start..................
var parent3 = document.querySelector(".cursor-view")
var crsr = document.querySelector(".cursor")
var navbar = document.querySelector(".navbar-brand")
var navbar1 = document.querySelector(".menubar")
var navbar2 = document.querySelector(".video")
var navbar3 = document.querySelector(".amir")
var navbar4 = document.querySelector(".amir1")
parent3.addEventListener("mousemove" , function(dets){
    gsap.to(".cursor",{
        x:dets.x, 
        y:dets.y,
        duration:1,
        ease:"back.out",
    })
    
})
navbar.addEventListener("mouseenter", function(){
    gsap.to(".cursor",{
        scale:3,
        backgroundColor:"rgba(5, 140, 163,0.2)",
        border:"none",
    })
})
navbar.addEventListener("mouseleave", function(){
    gsap.to(".cursor",{
        scale:1,
        backgroundColor:"transparent",
        border:"2px solid #fff",
    })
})
navbar1.addEventListener("mouseenter", function(){
    gsap.to(".cursor",{
        scale:3,
        backgroundColor:"rgba(5, 140, 163,0.2)",
        border:"none",
    })
})
navbar1.addEventListener("mouseleave", function(){
    gsap.to(".cursor",{
        scale:1,
        backgroundColor:"transparent",
        border:"2px solid #fff",
    })
})
navbar2.addEventListener("mouseenter", function(){
    gsap.to(".cursor",{
        scale:3,
        backgroundColor:"rgba(5, 140, 163,0.2)",
        border:"none",
    })
})
navbar2.addEventListener("mouseleave", function(){
    gsap.to(".cursor",{
        scale:1,
        backgroundColor:"transparent",
        border:"2px solid #fff",
    })
})
navbar3.addEventListener("mouseenter", function(){
    gsap.to(".cursor",{
        scale:3,
        backgroundColor:"rgba(5, 140, 163,0.2)",
        border:"none",
    })
})
navbar3.addEventListener("mouseleave", function(){
    gsap.to(".cursor",{
        scale:1,
        backgroundColor:"transparent",
        border:"2px solid #fff",
    })
})
navbar4.addEventListener("mouseenter", function(){
    gsap.to(".cursor",{
        scale:3,
        backgroundColor:"rgba(5, 140, 163,0.2)",
        border:"none",
    })
})
navbar4.addEventListener("mouseleave", function(){
    gsap.to(".cursor",{
        scale:1,
        backgroundColor:"transparent",
        border:"2px solid #fff",
    })
})

// ....................cursor end..................

// ....................splide-first start..................
    var splide = new Splide( '#splide-first', {
        type   : 'loop',
        perPage: 3,
        focus  : 'left',
        breakpoints: {
            0: { perPage: 1 },
            578: { perPage: 1 },
            992: { perPage: 2 },
            1200: { perPage: 3 },
          },
      } );
      splide.mount();
    });
// ....................splide-first end..................

// ....................splide-sec end..................
$(document).ready(function(){
    var splide = new Splide( '#splide-sec',{
    type   : 'loop',}
     );
    splide.mount();
    $('.pricing-card').on('mouseover',function (){
        $('.pricing-card').removeClass('active');
    });
    $('.pricing-card').on('mouseleave',function (){
        $('.pricing-card:last-child').addClass('active');
    });
});
// ....................splide-sec end..................

// ....................splide-third end..................
$(document).ready(function(){
    var splide = new Splide( '#splide-third',{
    type   : 'loop',}
     );
    splide.mount();
})
// ....................splide-third end..................

// ....................splide-four end..................
$(document).ready(function(){
    var splide = new Splide( '#splide-four', {
        type   : 'loop',
        perPage: 4,
        perMove: 1,
        breakpoints: {
            0: { perPage: 2 },
            778: { perPage: 2 },
            992: { perPage: 3 },
            1200: { perPage: 4 },
          },
      } );
      
      splide.mount();
})
// ....................splide-four end..................

// ....................Arrow top effect..................
$(document).ready(function(){
    new WOW().init();
})
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 500) {
        $('.scroll-top-arrow').fadeIn('slow');
    }else {
        $('.scroll-top-arrow').fadeOut('slow');
    }
});

//Click event to scroll to top
$(document).on('click', '.scroll-top-arrow', function () {
    $('html, body').animate({scrollTop: 0}, 100);
    return false;
});

$(document).on('click', '.home', function () {
    $('html, body').animate({scrollTop: 0}, 100);
    return false;
});