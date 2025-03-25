// Hero Section Animation (Comes from y:100% on load)
gsap.from(".hero", {
    y: "100%",
    opacity: 0,
    duration: 2,
    ease: "power2.out",
});

let tl = gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: ".page-4",
        start: "top -10%",
        end: "bottom -100%",
        scrub: true,
        pin: true
    }
});



// Page-1 Animation
tl.from(".page-1 h1", {
    opacity: 0,
    ease: "power1.inOut",
    duration: 0.8,
    scrollTrigger: {
        scroller: "body",
        trigger: ".page-1",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
    }
});

// Page-4 Animations
tl.to(".page-4 .reel", {
    x: "-450%",
    ease: "power1.inOut"
})
.to(".page-4 .play", {
    x: "450%",
    ease: "power1.inOut"
}, "<")
.to(".video", {
    width: "100%",
    height: "100%",
    ease: "power1.inOut"
}, "<"); 

// Page-5 Animations
tl.to(".page-5 .two-img", {
    x: "50%",
    ease: "power1.inOut",
    duration: 2,
    scrollTrigger: {
        scroller: "body",
        trigger: ".page-5",
        start: "top 60%",
        end: "bottom 90%",
        scrub: true
    }
});

tl.to(".page-5 .vid-1", {
    x: "-50%",
    ease: "power1.inOut",
    duration: 2,
    scrollTrigger: {
        scroller: "body",
        trigger: ".page-5",
        start: "top 60%",
        end: "bottom 90%",
        scrub: true
    }
});

tl.to(".page-5 .vid-2", {
    x: "60%",
    ease: "power1.inOut",
    duration: 2,
    scrollTrigger: {
        scroller: "body",
        trigger: ".page-5",
        start: "top 80%",
        end: "bottom 90%",
        scrub: true
    }
});

tl.to(".page-5 .three-img", {
    x: "-100%",
    ease: "power1.inOut",
    duration: 2,
    scrollTrigger: {
        scroller: "body",
        trigger: ".page-5",
        start: "top 80%",
        end: "bottom 90%",
        scrub: true
    }
});

// Page-6 Animation
tl.from(".page-6 h1", {
    opacity: 0,
    y: 60,
    stagger: 0.5,
    duration: 2,
    scrollTrigger: {
        scroller: "body",
        trigger: ".page-6",
        start: "top 60%",
        end: "bottom 90%",
        scrub: true
    }
});

// One-Para Animation
gsap.from(".one-para", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay:2,
    stagger: 0.2,
    ease: "power2.out"
});

// Headings Animation
gsap.from(".headings .heading", {
    y: 100,
    opacity: 0,
    delay:2,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
});

// Cursor Follow Effect
var follow = document.querySelector(".follower");

document.addEventListener("mousemove", function (e) {
    gsap.to(follow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
    });
});

gsap.from(".logo", {
    opacity: 0,
    y:20,
    delay: 2,
    duration: 1,
    ease: "power2.out",
    stagger:0.3
})

gsap.from("a", {
    opacity: 0,
    y:20,
    delay: 2,
    duration: 1,
    ease: "power2.out",
    stagger:0.3
})

// Hover Effect for Videos
document.querySelectorAll(".img").forEach(function (imgContainer) {
    let video = imgContainer.querySelector(".bg-video");
    let image = imgContainer.querySelector(".bg-image");

    imgContainer.addEventListener("mouseenter", function () {
        video.style.opacity = "1";  
        image.style.opacity = "0";  
        video.play(); 
    });

    imgContainer.addEventListener("mouseleave", function () {
        video.style.opacity = "0";  
        image.style.opacity = "1";  
        video.pause(); 
    });
});
