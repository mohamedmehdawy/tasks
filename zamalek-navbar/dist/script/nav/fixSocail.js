/**
 * this function fix socail width
 */
function fixSocail() {
    let nav = document.querySelector("nav#main-nav"), socail = nav.querySelector(".links .top .left .socail"), links = nav.querySelector(".bottom ul");
    socail.style.width = getComputedStyle(links.children[links.children.length - 1]).width;
    console.log("hello");
}
export default fixSocail;
