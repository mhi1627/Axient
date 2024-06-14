

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menubox = document.getElementById("menubox");
    const closeBtn = document.getElementById("close-btn");
    const main = document.querySelector('.main');

    // Toggle menu box on menu icon click
    menuIcon.addEventListener("click", function() {
        menubox.classList.toggle("open");
        main.style.backgroundColor = "#ffffff81"
    });

    // Close menu box on close button click
    closeBtn.addEventListener("click", function() {
        menubox.classList.remove("open");
    });

    // Close menu box when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!menubox.contains(event.target) && event.target !== menuIcon) {
            menubox.classList.remove("open");
        }
    });

});
