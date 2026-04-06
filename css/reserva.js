let metodo = "whatsapp";

function selectMetodo(tipo, el){
  metodo = tipo;

  document.querySelectorAll(".opcion").forEach(o => o.classList.remove("active"));
  el.classList.add("active");
}

document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const personas = document.getElementById("personas").value;
  const mensaje = document.getElementById("mensaje").value;

  const texto = `Reserva Tulum%0A%0A
Nombre: ${nombre}%0A
Correo: ${correo}%0A
Teléfono: ${telefono}%0A
Fecha: ${fecha}%0A
Hora: ${hora}%0A
Personas: ${personas}%0A
Mensaje: ${mensaje}`;

  if(metodo === "whatsapp"){
    window.open(`https://wa.me/50575033574?text=${texto}`, "_blank");
  } else {
    window.location.href = `mailto:baltodano.jt@gmail.com?subject=Reserva&body=${texto}`;
  }
});