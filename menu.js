//NAVIGATION MENU RESPONSIVE
let show = true

const menuSection = document.querySelector(".menu-section");
const menuBurguer =  menuSection.querySelector(".menu-burguer");

menuBurguer.addEventListener("click", function()  {
    menuSection.classList.toggle("on", show);
    show = !show

    var navigation = document.querySelector(".navigation");

    if (navigation.style.display === "none"){
        navigation.style.display = "flex"
    } else{
        navigation.style.display = "none"
    }


});