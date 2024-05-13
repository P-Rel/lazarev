function navAnimation(){
    var nav = document.querySelector("nav")


nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline()

    tl.to("#nav-bottom", {
        height: "21vh",
    })
    tl.to(".navpart-2 h5", {
        display: "block"
    })
    tl.to(".navpart-2 h5 span", {
        y: 0,
        stagger: {
            amount: 0.6
        }

    })
})

nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline()

    tl.to(".navpart-2 h5 span", {
        y: 25,
        stagger: {
            amount: 0.2
        }

    })
    tl.to(".navpart-2 h5", {
        display: "none",
        duration: 0.2
    })
    tl.to("#nav-bottom", {
        height: 0,
        duration: 0.1,
    })
})
}

navAnimation()