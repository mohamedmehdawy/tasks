function navMobile() {
    let nav = document.querySelector("nav#main-nav"), openButton = nav.querySelector(".nav-mobile"), closeButton = nav.querySelector(".close-mobile"), links = nav.querySelector(".links");
    openButton.addEventListener("click", () => {
        links.classList.add("open");
    });
    closeButton.addEventListener("click", () => {
        links.classList.remove("open");
    });
}
export default navMobile;
