MouseMove();
function MouseMove(){
    document.addEventListener("mousemove",dets=>{
        let x = document.querySelector("#mouse").offsetWidth;
        let y = document.querySelector("#mouse").offsetHeight;
        // document.querySelector("#mouse").style.transform = `translate(${dets.pageX - x/2}px,${dets.pageY - y/2}px)`
        gsap.to("#mouse",{
            left:`${dets.pageX - x/2}px}`,
            top:`${dets.pageY - y/2}px}`
        })
    });
    document.querySelectorAll("h1,h2,h3,h4,h5,h6,p,a,img,svg,i").forEach(elem=>{
        elem.addEventListener("mouseenter",()=>{
            gsap.to("#mouse",{
                scale:2.4,
            })
        });
        elem.addEventListener("mouseleave",()=>{
            gsap.to("#mouse",{
                scale:1,
            })
        });
    });
}


Page2()
function Page2(){
    document.querySelectorAll(".page2-container h2").forEach(elem=>{
        let ren = Math.floor(Math.random()*50);
        // console.log(ren)
        elem.style.rotate = `${ren}deg`
    
        gsap.to(".page2-container",{
            scrollTrigger:{
                trigger:"#page2",
                scroll:"#main",
                start:"top 90%",
                end:"top 30%",
                // markers:true,
                scrub:2
            },
            width:"70%",
            height:"80vh",
            scale:1,
            opacity: 1
        })
    })
}
SvgEffect();
function SvgEffect(){
    gsap.from("#page1 .svg svg path",{
        opacity:0,
        stagger:-.05,
    })
    gsap.from("#page2 .svg svg path",{
        opacity:0,
        stagger:-.05,
        scrollTrigger:{
            trigger:"#page2 .svg svg path",
            scroll:"#main",
            start:"top 80%",
            end:"top 50%",
            // scrub:true
        }
    });gsap.from("#page3 .svg svg path",{
        opacity:0,
        stagger:-.05,
        scrollTrigger:{
            trigger:"#page3 .svg svg path",
            scroll:"#main",
            start:"top 80%",
            end:"top 50%",
            // scrub:true
        }
    });
    gsap.from(".img-bg",{
        y:140,
        scrollTrigger:{
            trigger:"#page3",
            scroll:"#main",
            start:"top 90%",
            end:"top -100%",
            scrub:true
        }
    })
}

Page3();
function Page2(){
    document.querySelectorAll(".page3-cover-left-quility").forEach(elem=>{
        // console.log(elem)
        let flag = 0;
        elem.addEventListener("click",()=>{
            if(flag == 0){
                elem.style.height = "25vh"
                elem.style.borderRadius = "20px"
                flag = 1
            }else{
                elem.style.height = "8vh"
                elem.style.borderRadius = "50px"
                flag = 0
            }
            
        })
    })
}

