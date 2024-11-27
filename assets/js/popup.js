const Layarpopup = document.querySelector(".popup");
const Kontenpopup = document.querySelector(".popup_content");
const Keluarpopup = document.querySelector(".popup_close");

Keluarpopup.addEventListener("click", () => {
    Layarpopup.classList.remove("active");
});