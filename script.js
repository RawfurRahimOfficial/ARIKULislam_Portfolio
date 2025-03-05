

function NavAnimation() {
    var manuI = document.querySelector("nav .manu")
    var closeI = document.querySelector("nav .close")

    var tl = gsap.timeline()

    tl.to("nav .mobileUl ", {
        top: 0,
        duration: 0.7
    })
    tl.from("nav .mobileUl li", {
        y: -70,
        stagger: 0.15,
        opacity: 0
    })

    tl.pause()


    manuI.addEventListener("click", function () {
        tl.play()

        gsap.to(manuI, {
            opacity: 0
        })
        gsap.to(closeI, {
            display: "inline-block",
        })

        gsap.from(closeI, {
            y: -30,
            duration: 0.5
        })

    })

    closeI.addEventListener("click", function () {
        tl.reverse()

        gsap.to(manuI, {
            opacity: 1,
            duration: 1,
            delay: 1.5
        })

        gsap.to(closeI, {
            display: "none",
            duration: 0.1
        })

    })





    // Logo i tag rorate animation
    gsap.to(".NavLogo i", {
        rotate: 360,
        repeat: -1,
        duration: 12,
        ease: "none"
    })

}

function BannerSection() {



    var tl = gsap.timeline()

    tl.from(".NavLogo, .deskTopUl li, .manu, nav button", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.1
    })

    tl.from(".BannerLeft h1", {
        x: -200,
        opacity: 0,
        duration: 0.4
    })

    tl.from(".BannerLeft p", {
        x: -200,
        opacity: 0,
        duration: 0.4
    })

    tl.from(".BannerLeft button", {
        opacity: 0
    })

    tl.from(".BannerRight img", {
        opacity: 0,
        duration: 0.8,
        x: 50
    }, "-=0.8")

    tl.from(".BannerLogo img", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15
    })



}

function BoxAnimation(){
    
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".ServicesSection",
        scroller:"body",
        start:"top 70%",
        end:"top -30%",
        scrub:3
    }
})

tl2.from(".Services",{
    y:50,
    opacity:0,
    duration:0.2
})


tl2.from("#Line1Left",{
    x:-50,
    opacity:0,
    duration:0.4
},"Line1")
tl2.from("#Line1Right",{
    x:50,
    opacity:0,
    duration:0.4
},"Line1")


tl2.from("#Line2Left",{
    x:-50,
    opacity:0,
    duration:0.4
},"Line2")
tl2.from("#Line2Right",{
    x:50,
    opacity:0,
    duration:0.4
},"Line2")


tl2.from("#Line3Left",{
    x:-50,
    opacity:0,
    duration:0.4
},"Line3")
tl2.from("#Line3Right",{
    x:50,
    opacity:0,
    duration:0.4
},"Line3")


}

function ProposalAnimation(){
    
var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".ProposalSection",
        scroller:"body",
        start:"top 70%",
        end:"0",
        scrub:3
    }
})


tl3.from(".ProposalSection",{
    y:120,
    opacity:0,
    duration:0.4
})
tl3.from(".PCLeft",{
    x:-100,
    opacity:0,
    duration:0.2
},"PC")
tl3.from(".PCRight",{
    x:100,
    opacity:0,
    duration:0.2
},"PC")
}

function CaseStudiesAnimation(){
    
var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".CaseStudiesSection",
        scroller:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:3
    }
})

tl4.from(".CaseStudies",{
    y:100,
    opacity:0,
    duration:0.4
})

tl4.from(".CSBoxContent",{
    y:100,
    opacity:0,
    duration:0.4
})
tl4.from(".CSBox",{
    x:-100,
    opacity:0,
    duration:0.4
})

}

function FormAnimation(){
    
var tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:".ContactSection",
        scroller:"body",
        start:"top 55%",
        end:"top 20%",
        scrub:2
    }
})

tl5.from(".ContactTittle",{
    y:100,
    opacity:0,
    duration:0.4
})
tl5.from(".FromContent",{
    y:100,
    opacity:0,
    duration:0.4
})
tl5.from(".RadioBox",{
    x:-150,
    opacity:0,
    duration:0.4
})
tl5.from("#NameLable p, #NameInput ",{
    x:-150,
    opacity:0,
    duration:0.4
})
tl5.from("#EmailLable p, #EmaileInput ",{
    x:-150,
    opacity:0,
    duration:0.4
})
tl5.from("#MassageLable p, #MassageTextarea ",{
    x:-150,
    opacity:0,
    duration:0.4
})
tl5.from("#SubmitInput",{
    x:-150,
    opacity:0,
    duration:0.4
})

}

function FooterAnimation(){
    
var tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:"footer",
        scroller:"body",
        start:"top 95%",
        end:"top 75%",
        scrub:5
    }
})


tl6.from("footer",{
    y:200,
    opacity:0,
    duration:2,
    delay:1
})

tl6.from(".FooterNav",{
    y:100,
    opacity:0,
    duration:1,
    delay:0.5
})
tl6.from(".FooterCenter",{
    y:100,
    opacity:0,
    duration:0.8,
    delay:0.2
})

tl6.from(".FooterBottom ",{
    y:100,
    opacity:0
})


// Footer logo animation
gsap.to(".FNLogo i", {
    rotate: 360,
    repeat: -1,
    duration: 12,
    ease: "none"
})


}

NavAnimation()
BannerSection()
BoxAnimation()
ProposalAnimation()
CaseStudiesAnimation()
FormAnimation()
FooterAnimation()

// function LocoMotiveJs(){
    
//     gsap.registerPlugin(ScrollTrigger);
    
    
//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector(".main"),
//       smooth: true
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);
    
//     ScrollTrigger.scrollerProxy(".main", {
//       scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//       }, 
//       getBoundingClientRect() {
//         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//       },
//       pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//     });
    
    
    
//     tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
//       .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
//       .to(".purple", {backgroundColor: "#28a92b"}, 0);
    
    
    
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
//     ScrollTrigger.refresh();
    
    
//     }
//     LocoMotiveJs()

