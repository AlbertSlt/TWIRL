const perfiles = [
  {
    id: 1,
    nombre: "Rigoberto Ramirez",
    descripcion: "Me gusta el arrrrte",
    imagen: "../images/perfiles/id1.jpg",
    genero: "masculino",
  },
  {
    id: 2,
    nombre: "Tania Termidor",
    descripcion: "El amor es una ilusion y yo una ilusionista",
    imagen: "../images/perfiles/id2.jpg",
    genero: "femenino",
  },
  {
    id: 3,
    nombre: "Filipo Filomeno",
    descripcion: "Famoso filantropo de la Filarmonica",
    imagen: "../images/perfiles/id3.jpg",
    genero: "masculino",
  },
  {
    id: 4,
    nombre: "Horia, Susana",
    descripcion: "Los ultimos serán los primeros",
    imagen: "../images/perfiles/id4.jpg",
    genero: "femenino",
  },
  {
    id: 5,
    nombre: "Jacinto Juarez",
    descripcion: "Con el microfono grande cualquiera es cantante",
    imagen: "../images/perfiles/id5.jpg",
    genero: "masculino",
  },
  {
    id: 6,
    nombre: "D'Labuena, Ricarda",
    descripcion: "Es dura la vida del artista",
    imagen: "../images/perfiles/id6.jpg",
    genero: "femenino",
  },
];


// generar un perfil aleatorio
function generarPerfilAleatorio() {
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
      <h3>${perfilAleatorio.nombre}</h3>
      <img src="${perfilAleatorio.imagen}" alt="imagen de ${perfilAleatorio.nombre}">
      <p>${perfilAleatorio.descripcion}</p>
  `;
}

// Botones
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
window.addEventListener('DOMContentLoaded', () => {
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