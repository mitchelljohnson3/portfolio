let menu = document.querySelector(".mobile-menu");
let btn = document.querySelector(".show-menu-btn");
let navBtns = document.querySelectorAll(".mobile-btn");
let container = document.getElementById("container-div");
let closeBtn = document.getElementById("menu-close");

btn.addEventListener("click", function() {
    menu.setAttribute("style", "display: inline-block");
    let overlay = document.createElement("div");
    overlay.setAttribute("style", "background-color: rgba(114, 107, 107, 0.5);")
    overlay.setAttribute("style", "z-index: 40");
    overlay.setAttribute("style", "height: 100%");
    overlay.setAttribute("style", "width: 100%");
    container.appendChild(overlay);
});

closeBtn.addEventListener("click", function() {
    menu.setAttribute("style", "display: none");
});

navBtns.forEach(button => {
    button.addEventListener("click", function() {
        menu.setAttribute("style", "display: none");
        container.setAttribute("style", "background-color: none");
    });
});