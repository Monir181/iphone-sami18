gsap.to(".img1",{
    x:440,
    duration:1,
    ease:"power1.inOut",
    delay:1
})
gsap.to(".img3",{
    x:-300,
    duration:1,
    ease:"power1.inOut",
    delay:1
})
gsap.to(".img2",{
    y:900,
    duration:1.6,
    ease:"power1.inOut",
    opacity: 1,
    delay:1.8,
})
gsap.from(".main",{
    scale:2,
    skew:2,
    duration:1.6,
    ease:"power1.inOut"
})
gsap.from(".title",{
    y:160,
    skew:2,
    duration:1.2,
    ease:"bounce",
    delay:1.3
})
gsap.from(".content",{
    x:-180,
    duration:1.2,
    ease:"power1.inOut",
    delay:3
})
gsap.from(".BUY",{
    x:250,
    duration:1.2,
    ease:"power1.inOut",
    delay:3
})