/*GALLERIA */

// FILTRO GALERÍA
const botones = document.querySelectorAll(".filtros button");
const items = document.querySelectorAll(".item");

botones.forEach(boton => {
  boton.addEventListener("click", () => {

    // quitar activo
    botones.forEach(btn => btn.classList.remove("activo"));
    boton.classList.add("activo");

    const filtro = boton.getAttribute("data-filter");

    items.forEach(item => {
      if (filtro === "all" || item.classList.contains(filtro)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

  });
});
// =============================
// MENU MOVIL
// =============================

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");
const overlay = document.getElementById("menuOverlay");

if(toggle && nav && overlay){

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
  });




}
function toggleMenu(){
  document.querySelector(".nav").classList.toggle("active");
}