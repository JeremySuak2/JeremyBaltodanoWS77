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
