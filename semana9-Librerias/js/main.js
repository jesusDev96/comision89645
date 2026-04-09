// const productos= [
//     {
//         id: 1, 
//         nombre: "televisor", 
//         precio: 5000
//     },
//     {
//         id: 2, 
//         nombre: "lavarropas", 
//         precio: 8000
//     },
//     {
//         id: 3, 
//         nombre: "microondas", 
//         precio: 2000
//     },
//     {
//         id: 4, 
//         nombre: "secadora", 
//         precio: 4000
//     },
//     {
//         id: 5, 
//         nombre: "cocina", 
//         precio: 13000
//     },
// ]

// let usersContainer = document.getElementById("users-container")
// const URL = "https://jsonplaceholder.typicode.com/users"

// function obtenerUsuarios() {
//     fetch(URL)
//         .then(response => response.json())
//         .then(data => renderUsuarios(data))
// }

// obtenerUsuarios()

// function renderUsuarios (listaUsuarios) {
//     listaUsuarios.forEach(usuario => {
//         const card = document.createElement("div")
//         card.innerHTML = `<h2>Nombre: ${usuario.name}</h2>
//                           <h3>Usuario: ${usuario.username}</h3>
//                           <h4>Contacto: ${usuario.email}</h4>`
//         usersContainer.appendChild(card)
//     })
// }


// const URL = "./db/data.json"

// function obtenerProductos() {
//     fetch(URL)
//         .then(response => response.json())
//         .then(data => renderProductos(data))
// }

// obtenerProductos()

// function renderProductos (listaProductos) {
//     listaProductos.forEach(producto => {
//         const card = document.createElement("div")
//         card.innerHTML = `<h2>Nombre: ${producto.nombre}</h2>
//                           <h3>ID: ${producto.id}</h3>
//                           <h4>Precio: $${producto.precio}</h4>`
//         usersContainer.appendChild(card)
//     })
// }



// Swal.fire({
//   icon: "error",
//   title: "Pago rechazado",
//   text: "No pudimos procesar el pago, contacta a tu banco",
//   footer: "<p>Tenes dudas? <a href=\"#\">Contactanos</a>"
// });

// Swal.fire({
//      title: "Comprobante",
//   imageUrl: "https://placeholder.pics/svg/300x300",
//   imageHeight: 500,
//   imageAlt: "A tall image",
//   footer: "<p>Podes descargarlo<a href=\"#\">acá</a>"
// });

// Swal.fire({
//   title: "Desea confirmar la compra?",
//   showDenyButton: true,
//   confirmButtonText: "Comprar",
//   denyButtonText: `Anular pago`
// }).then((result) => {
//   /* Read more about isConfirmed, isDenied below */
//   if (result.isConfirmed) Swal.fire("Compra efectuada!", "A continuacion vas a ver el comprobante", "success");
//   else if (result.isDenied) Swal.fire("Pago cancelado", "Podes volver a efectuar la compra cuando quieras", "info");
// });



Toastify({
  text: "Cambios guardados",
  duration: 1500,
  destination: "#",
  newWindow: true,
  close: false,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: false, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){} // Callback after click
}).showToast();