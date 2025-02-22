//Completar carousel bootstrap
window.addEventListener('DOMContentLoaded', async function () {
  try {
    //cargar json
    const response = await fetch('./json/carousel.json');
    if (!response.ok) throw new Error("Error: No se carga el JSON");
    const images = await response.json();

    //seleccionar el contenedor del caru
    const carouselInner = document.querySelector(".carousel-inner");

    //limpiar el contenido por las dudas
    carouselInner.innerHTML = "";

    //generar elementos
    images.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("carousel-item");
      if (index === 0) div.classList.add("active"); //la primera imagen debe ser "active" seg. bootstrap

      div.innerHTML = `<img src="${item.imagen}" class="d-block w-100" alt="${item.id}">`;

      carouselInner.appendChild(div);
    });
  } catch (error) {
    console.error("Error al cargar el carousel: ", error);
  }
});


document.getElementById('botones-registro').addEventListener('click', function (evento) {
  if (evento.target.classList.contains('bt-reg')) { // Verifica si el clic fue en un botón específico, no en el div
    evento.preventDefault(); //evita que el boton lleve al incio de la pag.

    Swal.fire({
      icon: "info",
      title: "Oops... El registro está desactivado",
      text: "Mejor comienza por explorar los candidatos en nuestra seccion Explorar",
      confirmButtonText: "EXPLORAR",
      showCancelButton: true,

    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "./pages/explorar.html";
      }
    });
  }
});