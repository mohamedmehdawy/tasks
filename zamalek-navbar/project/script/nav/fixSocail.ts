/**
 * this function fix socail width
 */

function fixSocail() {
    let nav = document.querySelector("nav#main-nav") as HTMLElement,
        socail = nav.querySelector(".links .top .left .socail") as HTMLElement,
        links = nav.querySelector(".bottom ul") as HTMLUListElement;

    socail.style.width = getComputedStyle(links.children[links.children.length - 1]).width;
    console.log("hello")
}
export default fixSocail; 