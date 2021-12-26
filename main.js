

AOS.init({
    duration: 1000,
    // offset: 400,
});

// sticky navbar set 



window.addEventListener("scroll",() => {

    const navbar  = document.getElementById("header")
    navbar.classList.toggle("active",window.scrollY > 100)
})