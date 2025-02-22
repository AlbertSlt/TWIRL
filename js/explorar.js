let perfiles = [];
function cargarPerfiles() {
  return fetch('../json/perfiles.json')
    .then(response => response.json())
    .then(data => {
      perfiles = data;
    })
    .catch(error => console.error('Error al cargar los perfiles: ', error));
}

window.addEventListener('DOMContentLoaded', () => {
  cargarPerfiles().then(() => {

    // Botones despues de cargar perfiles
    document.querySelector('.btn1').addEventListener('click', function () {
      const perfilAleatorio = generarPerfilAleatorio();
      crearTarjetaPerfil(perfilAleatorio);
    });

    document.querySelector('.btn2').addEventListener('click', function () {
      const perfilAleatorio = generarPerfilAleatorio();
      crearTarjetaPerfil(perfilAleatorio);
    });

    // Guardar opcion en LocalStorage
    document.querySelector('.opciones').addEventListener('change', function (event) {
      const opcionSeleccionada = event.target.value;
      localStorage.setItem('opcionSeleccionada', opcionSeleccionada); // Guardar en localStorage
      const perfilAleatorio = generarPerfilAleatorio();
      crearTarjetaPerfil(perfilAleatorio);
    });


    // Cargar opción desde localStorage
    const opcionGuardada = localStorage.getItem('opcionSeleccionada');

    if (opcionGuardada) {
      const radio = document.querySelector(`input[value="${opcionGuardada}"]`);
      if (radio) {
        radio.checked = true;
        const perfilAleatorio = generarPerfilAleatorio();
        crearTarjetaPerfil(perfilAleatorio);
      }
    }
  });
});



// generar un perfil aleatorio
function generarPerfilAleatorio() {
  if (perfiles.length === 0) { //si los perfiles no cargaron todavia, no hace nada
    console.log('perfiles no cargados aún.')
    return;
  }

  const opcionSeleccionada = document.querySelector('input[name="opcion"]:checked').value;
  let perfilesFiltrados = [];

  if (opcionSeleccionada === '1') { //opc 1 Masc
    perfilesFiltrados = perfiles.filter(perfil => perfil.genero === 'masculino');
  } else if (opcionSeleccionada === '2') { //opc 2 Fem
    perfilesFiltrados = perfiles.filter(perfil => perfil.genero === 'femenino');
  } else {
    perfilesFiltrados = perfiles;
  }

  const perfilAleatorio = perfilesFiltrados[Math.floor(Math.random() * perfilesFiltrados.length)];
  return perfilAleatorio;
}

// crear la tarjeta para el perfil aleatorio
function crearTarjetaPerfil(perfilAleatorio) {
  const container = document.querySelector('.card2');
  container.innerHTML = `
      <h3>${perfilAleatorio.nombre} - ${perfilAleatorio.edad} años</h3>
      <img src="${perfilAleatorio.imagen}" alt="imagen de ${perfilAleatorio.nombre}">
      <p>"${perfilAleatorio.descripcion}"</p>
  `;
}


document.getElementById("btn1").addEventListener("click", () => {
  Toastify({
    text: "Feo con feo... Jamas funcionaría!",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "left",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #d9534f, #c9302c",
      cursor: "default", //no me gusta la manito
    },
    onClick: function () {
      Swal.fire({
        imageUrl: "../images/dae.png",
        imageHeight: 270,
        title: "No es para enojarse",
        text: "Es una broma :)",
        confirmButtonText: "Entiendo, los feos tenemos sentido del humor",
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      });
    }
  }).showToast();
})

document.getElementById("btn2").addEventListener("click", () => {
  Toastify({
    text: "Excelente elección! Sus hijos serán hermosos!",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #28a745, #6dbf73)",
      cursor: "default",
    },
    onClick: function () { } //Callback
  }).showToast();
})