let menubtn = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menubtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
    menubtn.classList.toggle("bx-x");
});
