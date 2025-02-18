document.addEventListener('DOMContentLoaded', function () {
  Swal.fire({
    icon: "info",
    title: "Ay!",
    text: "Esta página aún no está habilitada, podrías hacer match contigo mismo, lo que causaría un error grave en la continuidad espacio-tiempo, alterando el curso de los eventos y poniendo en riesgo tu propia existencia!",
    confirmButtonText: "Gracias por salvar mi vida",
    customClass: {
      popup: 'swal-gral',          // estilo del contenedor
      title: 'swal2-title',
      content: 'swal2-content',
    },
    showCancelButton: false,
    allowOutsideClick: false,  
    allowEscapeKey: false,
    allowEnterKey: false
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../index.html";
    }
  });
});