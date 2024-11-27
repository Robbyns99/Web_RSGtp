const Layarpopup = document.querySelector(".popup");
const Kontenpopup = document.querySelector(".popup_content");
const Keluarpopup = document.querySelector(".popup_close");

window.addEventListener("load", () => {
setTimeout(() => {
    Layarpopup.classList.add("active");
    }, 2000);
});

Keluarpopup.addEventListener("click", () => {
    Layarpopup.classList.remove("active");
});