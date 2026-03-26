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
//     {
//         id: 6, 
//         nombre: "termotanque", 
//         precio: 11000
//     },
//     {
//         id: 7, 
//         nombre: "licuadora", 
//         precio: 5500
//     },
// ]


// getElementById -- querySelector("#id")
// let titulo = document.getElementById("title")
// let titleContainer = document.getElementById("title-container")
// console.log(titleContainer)


// getElementsByClassName -- querySelectorAll(".class")
// let pastas = document.getElementsByClassName("pasta")
// console.log(pastas[1])
// for (const pasta of pastas) {
//     console.log(pasta)
// }


// innerText
// titulo.innerText = "Hola coder!!"

// innerHTML
// let contenedor = document.getElementById("container")
// contenedor.innerHTML = "<h2>Hola comision <span>89645</span></h2>"

// createElement
// let subtitulo = document.createElement("h2")
// subtitulo.innerHTML = "<span>Aguante la pizza!!</span>"
// document.body.append(subtitulo)

// remove
// titulo.remove()
// pastas[0].remove()


// let marcas = document.getElementById("marcas")
// let zapatillas = ["nike", "adidas", "vans", "DC", "new balance", "puma"]

// for(const zapatilla of zapatillas) {
//     let li = document.createElement("li")
//     li.innerHTML = zapatilla
//     marcas.appendChild(li)
// }

// let products = document.getElementById("productos")
// productos.forEach(producto => {
//     let contenedor = document.createElement("div")
//     contenedor.className = "card"
//     contenedor.innerHTML = `<span>ID: ${producto.id}</span>
//                             <h3 class="card-producto">Producto: ${producto.nombre}</h3>
//                             <h4>Precio: $${producto.precio}</h4>`
//     products.appendChild(contenedor)
// })


// EVENTOS


// let evento = document.getElementById("h1")

// evento.addEventListener("click", clickTest)
// function clickTest() {
//     console.log("Evento de click")
// }

// let clicks = 0
// evento.onclick = () => {
//     clicks++
//     console.log("Cantidad de clicks: ",clicks)
// }

// let sumar = document.getElementById("plus-button")
// let restar = document.getElementById("minus-button")
// let counter = document.getElementById("counter")
// let contador = 0

// sumar.onclick = () => {
//     contador++
//     counter.innerHTML = contador
// }

// restar.onclick = () => {
//     contador--
//     counter.innerHTML = contador
// }


// let input = document.getElementById("input")
// input.onkeyup = () => {
//     console.log("Apretaste una tecla")
// }
// let zapatillas = ["nike", "adidas", "vans", "DC", "new balance", "puma"]
// input.onchange = () => {
//     const productos = zapatillas.find(producto => producto == input.value)
//     console.log(productos)
// }



// const player = "messi"
// const edad = 35

// localStorage.setItem("player", player)
// localStorage.setItem("edad", edad)

// console.log(localStorage.getItem("player"))
// console.log(localStorage.getItem("edad"))


// const jugador = {
//     nombre: "messi",
//     goles: 900
// }

// localStorage.setItem("jugador", jugador)
// const jugadorJSON = JSON.stringify(jugador)
// localStorage.setItem("jugador", jugadorJSON)
// console.log(localStorage.getItem("jugador"))

// const jugador1 = JSON.parse(localStorage.getItem("jugador"))
// console.log(jugador1)

// localStorage.removeItem("edad")
localStorage.clear()