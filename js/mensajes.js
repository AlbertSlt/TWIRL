document.addEventListener('DOMContentLoaded', function () {
    Swal.fire({
        icon: "info",
        title: "Ay!",
        text: "Esta página aún no esta habilitada, podrias hacer match con tigo mismo, lo que causaría un error grave en la continuidad espacio-tiempo, alterando el curso de los eventos y poniendo en riesgo tu propia existencia!",
        confirmButtonText: "Gracias por salvar mi vida",
        customClass: {
            popup: 'swal-gral',          // Aplicamos estilos al contenedor
            title: 'swal2-title',          // Estilos al título
            content: 'swal2-content',      // Estilos al contenido
            confirmButton: 'swal2-confirm',// Estilos al botón de confirmación
            cancelButton: 'swal2-cancel'   // Estilos al botón de cancelar
          }
        }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "../index.html";
            }
          });
        }
      );