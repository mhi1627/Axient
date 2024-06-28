

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menubox = document.getElementById("menubox");
    const closeBtn = document.getElementById("close-btn");
    const main = document.querySelector('.main');


    menuIcon.addEventListener("click", () => {
        menubox.classList.toggle("open");
        main.classList.toggle("blur");
    
    });

  
    closeBtn.addEventListener("click", () => {
            menubox.classList.remove("open")
            main.classList.remove("blur")
        })

    
     document.addEventListener("click", (event) =>{
            if (event.target !== menuIcon && !menubox.contains(event.target)) {
                menubox.classList.remove("open");
                main.classList.remove("blur")   
            }
        })






// Animations 

// Animated Navbar
var tl = gsap.timeline();
gsap.from(".navlogo", {
    y:-50
})

tl.from(".navPart2", {
    y:-80,
    stagger:0.5,
    delay:0.5
})



const head = document.querySelectorAll(".head")

const anim = gsap.to (".head", {
    backgroundPosition: "left 600px top -50px",
    duration:3,
    paused:true
})
head.forEach(word => {
   
    
    word.addEventListener("mouseenter", () => {
        anim.play();
    })
    word.addEventListener("mouseleave", () => {
        anim.reverse();
    })
})



const cards = document.querySelectorAll(".service");
var hey = "hey"
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
       gsap.to(".innerCard", {
        top:0
       });
       
  
})
       
})
cards.forEach(card => {
   

    card.addEventListener("mouseleave", () => {
       gsap.to(".innerCard", {
         top:500
       })
    })
})
       
})