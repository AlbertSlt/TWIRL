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