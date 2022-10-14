let btnHamburguesa = document.querySelector(".btnHmaburguesa");
let navMenu = document.querySelector(".nav");

btnHamburguesa.addEventListener("click", menu);

function menu () {
    navMenu.classList.toggle("nav-inactivo");
}