// carousel slide call 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
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