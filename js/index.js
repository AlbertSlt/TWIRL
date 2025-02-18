
/* -------------- EJERCICIO 1 -------------- */
/* Registrar usuarios con función */

// const USUARIOS = [];
/*------------- Descomentar para iniciar -------------*/
// function registrarUsuario() {
//   let nombreUsuario = prompt("Ingresa tu nombre de usuario:");
//   let edad = parseInt(prompt("Ingresa tu edad:"));
//   let genero = prompt("Ingresa tu género (masculino/femenino):";
//   let ciudad = prompt("Ingresa tu ciudad:");

//   let password;
//   let password2;

//   while (true) {
//     password = prompt("Ingresa tu contraseña:");
//     password2 = prompt("Ingresa tu contraseña nuevamente:");
//     if (password === password2) {
//       break;
//     } else {
//       alert("las contraseñas no coinciden! Intentalo de nuevo:")
//     }
//   }
//   USUARIOS.push({
//     nombre: nombreUsuario,
//     edad: edad,
//     genero: genero,
//     ciudad: ciudad,
//     password: password,
//   });
//   alert("Bienvenido "+ nombreUsuario)
// }
// registrarUsuario()

// USUARIOS.push({
//   nombre: "Angel",
//   edad: 39,
//   genero: "masculino",
//   ciudad: "salta",
//   password: 1234,
// });

// USUARIOS.push({
//   nombre: "Teodora",
//   edad: 28,
//   genero: "femenino",
//   ciudad: "salta",
//   password: 1234,
// });

// USUARIOS.push({
//   nombre: "Filomeno",
//   edad: 25,
//   genero: "masculino",
//   ciudad: "salta",
//   password: 1234,
// });

// USUARIOS.push({
//   nombre: "Robustiana",
//   edad: 32,
//   genero: "femenino",
//   ciudad: "salta",
//   password: 1234,
// });


// /*buscar usuarios de 30 a 40 años - creando nuevo array*/

// let usuarios3040 = [];

// for (let i = 0; i < USUARIOS.length; i++) {
//   if (USUARIOS[i].edad >= 30 && USUARIOS[i].edad <= 40) {
//     usuarios3040.push(USUARIOS[i])
//   }
// }
// console.log("Ususarios entre 30 y 40 años: ", usuarios3040)

// /* filtrar usando bucle for */

// for (let i = 0; i < USUARIOS.length; i++) {
//   if (USUARIOS[i].edad >= 30 && USUARIOS[i].edad <= 40) {
//     console.log("Usuario entre 30 y 40 años: ", USUARIOS[i]);
//   }
// }

// /* filtrar usando funcion */
// function filtrarPorEdad(a, b) {
//   return USUARIOS.filter(usuario => usuario.edad >= a && usuario.edad <= b);
// }
// console.log("Usuarios entre 20 y 30 años ", filtrarPorEdad(20, 30))

// /* buscar usuarios por ciudad */

// function buscarPorCiudad(ciudad) {
//   return USUARIOS.filter(usuario => usuario.ciudad.toLowerCase() === ciudad.toLowerCase());
// }





// /*------------- Descomentar para buscar por ciudad -------------*/

// // let ciudadABuscar = prompt("Ingresa la ciudad para buscar usuarios:");
// // console.log("Usuarios en " + ciudadABuscar + ": ", buscarPorCiudad(ciudadABuscar));


/* -------------- FIN EJERCICIO 1 -------------- */


document.getElementById('botones-registro').addEventListener('click', function (evento) {
  if (evento.target.classList.contains('bt-reg')) { // Verifica si el clic fue en un botón específico
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