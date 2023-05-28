'use strict';
const navLinks = document.querySelectorAll(".nav-link");
const navbarNav = document.querySelector(".navbar-nav");

const NavLinkStyle = function () {
    navLinks.forEach(link => {
        link.classList.add("text-light")
    })
}
NavLinkStyle()
document.addEventListener(`DOMContentLoaded`, function () {
    navLinks[0].classList.remove("text-light");
    navLinks[0].classList.add("text-danger", "nav-link-active");
})

// navbarNav.addEventListener(`click`, function (e) {
//     let clicked = e.target.closest(".nav-link");
//     if (!clicked) return;
//     navLinks.forEach(link => {
//         link.classList.remove("text-light");
//         link.classList.add("text-light");
//     });
//     clicked.classList.add("text-danger");
//     // e.preventDefault()
// })