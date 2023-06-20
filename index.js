const menuBtn = document.querySelector(".menu_btn");

menuBtn.addEventListener("click", function(){
    let navBar = document.querySelector(".nav-bar")
    navBar.classList.toggle("active")
})