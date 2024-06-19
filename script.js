

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

       
})



