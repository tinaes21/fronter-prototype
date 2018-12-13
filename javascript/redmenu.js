let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");
let photo = document.querySelector("#photo");
let titles = document.querySelector(".redlist");

menu.addEventListener("click", popup);


function popup(){
    console.log(this)
    nav.classList.toggle("open");
    //input.classList.toggle("active");
    //bt2.classList.toggle("active");
}



