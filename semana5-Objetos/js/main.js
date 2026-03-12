// const celular1 = {
//     modelo: "s25",
//     marca: "samsung",
//     precio: 1000
// }

// const celular2 = {
//     modelo: "iphone 17",
//     marca: "apple",
//     precio: 1200
// }

// console.log(celular1.marca)
// console.log(celular2.modelo)

// function Celular (modelo, marca, precio) {
//     this.modelo = modelo,
//     this.marca = marca,
//     this.precio = precio
// }

const productos = []
const precioDolar = 1400
class Celular {
    static id = 0
    constructor (modelo, marca, precio) {
        this.id = ++Celular.id,
        this.modelo = modelo,
        this.marca = marca,
        this.precio = precio
    }

    enPesos = () => {
        this.precio = this.precio*precioDolar
        console.log("Precio en pesos: $" + this.precio)
    }
}

const celular1 = new Celular("s25", "samsung", 1000)
const celular2 = new Celular("iphone 17", "apple", 1200)
// celular1.enPesos()
// celular2.enPesos()
// console.log(celular1, celular2)

const cargaProductos = () => {
    let cargaModelo = prompt("Ingrese el modelo del telefono")
    let cargaMarca = prompt("Ingrese la marca del telefono")
    let cargaPrecio = parseInt(prompt("Ingrese el precio en dolares"))
    const celular = new Celular(cargaModelo, cargaMarca, cargaPrecio)

    productos.push(celular)
}

const verProductos = () => {
    if(productos.length == 0) {
        alert("No hay productos agregados")
    } else {
        console.log(productos)
    }
}


let menu = parseInt(prompt("Ingrese 1 para ver el catalogo, 2 para cargar un producto, 3 para salir"))

while(menu !== 3) {
    switch(menu) {
        case 1:
            verProductos()
            break
        case 2:
            cargaProductos()
            break
        default:
            alert("Opcion incorrecta")
    }
    menu = parseInt(prompt("Ingrese 1 para ver el catalogo, 2 para cargar un producto, 3 para salir"))
}
alert("Gracias!!")