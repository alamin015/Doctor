// carousel slide call 

$(document).ready(function(){
    $(".carousel1").owlCarousel({
        loop : true,
        autoplay:true,
        autoplayTimeout:3000,
        nav : true,
        autoplayHoverPause:true,
        // responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:true,
            loop : true,
        },
        600:{
            items:2,
            nav:true,
            loop : true,
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
    });



    $(".carousel2").owlCarousel({
        loop : true,
        autoplay:true,
        autoplayTimeout:3000,
        // nav : true,
        dots : true,
        autoplayHoverPause:true,
        // responsiveClass:true,
        responsive:{
        0:{
            items:1,
            dots : true,
            loop : true,
        },
        500:{
            items:2,
            dots : true,
            loop : true,
        },
        600:{
            items:3,
            dots : true,
            loop : true,
        },
        1000:{
            items:4,
            dots : true,
            loop:true
        }
    }
    });
  });

AOS.init({
    duration: 1000,
    // offset: 400,
});

// sticky navbar set 



window.addEventListener("scroll",() => {

    const navbar  = document.getElementById("header")
    navbar.classList.toggle("active",window.scrollY > 100)
})