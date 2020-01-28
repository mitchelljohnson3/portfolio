// mobile hamburger code
let menu = document.querySelector(".mobile-menu");
let btn = document.querySelector(".show-menu-btn");
let navBtns = document.querySelectorAll(".mobile-btn");
let body = document.getElementById("global-styles");

btn.addEventListener("click", function() {
    menu.setAttribute("style", "display: inline-block");
    let overlay = document.createElement("div");
    overlay.setAttribute("style", "background-color: rgba(114, 107, 107, 1.0);")
    overlay.setAttribute("style", "height: 100%");
    overlay.setAttribute("style", "width: 100%");
    body.appendChild(overlay);
});

navBtns.forEach(button => {
    button.addEventListener("click", function() {
        menu.setAttribute("style", "display: none");
        body.setAttribute("style", "background-color: none");
    });
});

// more info on projects page code
let projects = document.querySelectorAll("#project-card");


projects.forEach(project => {
    let elements = project.children;
    elements[0].children[0].addEventListener("click", () => {
        elements[0].setAttribute("style", "display: none");
        elements[1].setAttribute("style", "display: block");
        elements[2].setAttribute("style", "display: block");
    });
    elements[1].addEventListener("click", () => {
        elements[0].setAttribute("style", "display: block");
        elements[1].setAttribute("style", "display: none");
        elements[2].setAttribute("style", "display: none");
    });
});