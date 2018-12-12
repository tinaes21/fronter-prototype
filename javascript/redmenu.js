let burger = document.querySelector(".burger");
let red = document.querySelector(".red");
let photo = document.querySelector("#photo");
let titles = document.querySelector(".redlist");

burger.addEventListener("click", popup);
function popup(){
    red.classList.toggle("open");
    //input.classList.toggle("active");
    //bt2.classList.toggle("active");
}
