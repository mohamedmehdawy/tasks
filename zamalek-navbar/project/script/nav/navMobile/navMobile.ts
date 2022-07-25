function navMobile() {
    let nav = document.querySelector("nav#main-nav") as HTMLElement,
        openButton = nav.querySelector(".nav-mobile") as HTMLElement,
        closeButton = nav.querySelector(".close-mobile") as HTMLElement,
        links = nav.querySelector(".links") as HTMLElement;

    openButton.addEventListener("click", () => {
        links.classList.add("open");
    });
    
    closeButton.addEventListener("click", () => {
        links.classList.remove("open");
    });
}

export default navMobile;