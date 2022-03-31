let side_bar = document.getElementById("side-bar");
let menu_btn = document.getElementById("toogle-menu");
let container_1 = document.getElementById("container-1");
let container_2 = document.getElementById("container-2");
let container_3 = document.getElementById("container-3");
let container_5 = document.getElementById("container-5");
let home_btn = document.getElementById("home-btn");
let about_btn = document.getElementById("about-btn");
let skill_btn = document.getElementById("skill-btn");
let portfolio_btn = document.getElementById("portfolio-btn");
let services_btn = document.getElementById("services-btn");
let reviews_btn = document.getElementById("reviews-btn");
let scroll_btn_element = document.getElementById("scroll-top-btn")


function toogle_menu() {
    let computed_style = getComputedStyle(side_bar);
    let left = computed_style.left;
    if(left == "-300px"){
        side_bar.style.left = "0px";
        menu_btn.innerHTML = "<i class=\"bi bi-x-lg\"></i>";
    }
    else {
        side_bar.style.left = "-300px"
        menu_btn.innerHTML = "<i class=\"bi bi-list\"></i>";
    }
}

function correct_toggle() {
    let width = window.innerWidth;
    if(width >= 1000){
        side_bar.style.left = "0px"
        menu_btn.innerHTML = "<i class=\"bi bi-x-lg\"></i>";
    }
    else {
        side_bar.style.left = "-300px"
        menu_btn.innerHTML = "<i class=\"bi bi-list\"></i>";
    }
}

function scroll_btn() {
    let scroll = window.scrollY
    if(scroll >= 200){
        scroll_btn_element.style.display = "flex"
    }
    else {
        scroll_btn_element.style.display = "none"
    }
    console.log(scroll);
}


function scroll_zero() {
    window.scrollTo(0,0)
}
