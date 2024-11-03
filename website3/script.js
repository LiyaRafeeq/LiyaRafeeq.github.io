var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#susdude",{
    top: "120%",
    left: "0%",
    rotate: "80deg"
}, 'maroon')
tl.to("#roll1",{
    top:"160%",
    left: "23%"
}, 'maroon')
tl.to("#bill5",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'maroon')
tl.to("#coin1",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'maroon')
tl.to("#bill2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'maroon')
tl.to("#roll2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'maroon')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})



tl2.to("#roll2",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#susdude",{
    width:"35%",
    top: "210%",
    left: "33%",
    rotate: "0deg"
}, 'ca')
