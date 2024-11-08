'use strict';

/**
 * add event listener on multiple element
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0,len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


/**
 * PRELOADER
 * 
 * Preloader will visible untill document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

/**
 * Mobile Navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);

/**
 * Header & Back Top Btn
 * 
 * active header & back top btn ketika window scroll kebawah sampai 100px
 */

const header =  document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemtInScroll = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

window.addEventListener("scroll", activeElemtInScroll);

/**
 * Scroll Reveal
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
            revealElements[i].classList.add("revealed");
        } else {
            revealElements[i].classList.remove("revealed");
        }
    }
}

const revealButtons = document.querySelectorAll(".revealButton");
const hiddenContents = document.querySelectorAll(".hiddenContent");

        revealButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                // Toggle the display of the corresponding hidden content
                if (hiddenContents[index].style.display === "none") {
                    hiddenContents[index].style.display = "block";
                    button.textContent = "Hide " + (index + 1); // Change button text to "Hide"
                } else {
                    hiddenContents[index].style.display = "none";
                    button.textContent = "Reveal " + (index + 1); // Change button text back to "Reveal"
                }
            });
        });

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);
