function init() {

    gsap.registerPlugin(ScrollTrigger);
    
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, 
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init() 

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function(dets){
    // console.log(dets);
    crsr.style.left = dets.x +10+ "px";
    crsr.style.top = dets.y +10+ "px";

}) 

// var vd = document.querySelector("video");
// vd.addEventListener("mouseenter", function(dets){
// // console.log("Enter video");

// })


var tl = gsap.timeline({
    scrollTrigger : {
        trigger : ".page1 h1",
        scroller : ".main",
        // markers:true,
        start : "top 8",
        end : "top 0",
        scrub:3
    }
})



// let mm = gsap.matchMedia();

// // add a media query. When it matches, the associated function will run
// mm.add("(min-width: 800px)", () => {

//   // this setup code only runs when viewport is at least 800px wide
//   gsap.to(...);
//   gsap.from(...);
//   ScrollTrigger.create({...}); 

//   return () => { // optional
//     // custom cleanup code here (runs when it STOPS matching)
//   };
// });







tl.to(".page1 h1",{
    x:-80,
    // duration:1,
},"varsame")

tl.to(".page1 h2",{
    x:80
},"varsame")

tl.to(".page1 video",{
    width:"80%"
},"varsame")


var tl2 = gsap.timeline({
    scrollTrigger : {
        trigger : ".page1 h1",
        scroller : ".main",
        // markers:true,
        start : "top -115%",
        end : "top -120%",
        scrub:3
    }
})


tl2.to(".main",{
    backgroundColor: "#fff"
})


var tl3 = gsap.timeline({
    scrollTrigger : {
        trigger : ".page1 h1",
        scroller : ".main",
        // markers:true,
        start : "top -320%",
        end : "top -322%",
        scrub:3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D" ,
})






var ab1 = gsap.timeline({
    scrollTrigger : {
        trigger : "footer",
        scroller : ".main",
        // markers:true,
        start : "top 700",
        end : "top 120%",
        scrub:3
    }
})


ab1.to(".main",{
    backgroundColor: "#0F0D0D"
})


var ab2 = gsap.timeline({
    scrollTrigger : {
        trigger : "footer",
        scroller : ".main",
        // markers:true,
        start : "top 10%",
        end : "top 20%",
        scrub:3
    }
})

ab2.to(".main",{
    backgroundColor:"#fff" ,
})







var boxes = document.querySelectorAll(".box");
// console.log(boxes);
boxes.forEach(function(ele){
    // console.log(ele)
    ele.addEventListener("mouseenter",function(){
        // ele.style.backgroundColor = "red"
        var att = ele.getAttribute("data-image")
        console.log(att)
        crsr.style.width = "350px"
        crsr.style.height = "300px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
      

    })

    ele.addEventListener("mouseleave",function(){
        ele.style.backgroundColor = "transparent"
        crsr.style.width = "16px"
        crsr.style.height = "16px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var purple = document.querySelector("#purple")
var h4 = document.querySelectorAll("#nav h4")
h4.forEach(function(elem){
    // console.log(elem);
    elem.addEventListener("mouseenter",function(){
        // console.log(elem)  b 
        purple.style.display = "block"
        purple.style.opacity = "1"
    })

    document.querySelector("#nav").addEventListener("mouseleave",function(){
        // console.log(elem)
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})








