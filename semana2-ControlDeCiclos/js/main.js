// let validar = false

// if(validar) {
//     console.log("Variable verdadera")
// }

// let fruta = "sandia"
// let mes = "febrero"
// let edad = "18"

// if(fruta == "mandarina") {
//     console.log("Felictaciones! Estamos entrando en otoño")
// } else if (fruta == "sandia") {
//     console.log("Me parece que todavia es verano")
// } else {
//     console.log("Banana y manzana hay todo el año")
// }


// OR ||
// if(mes == "febrero" || fruta == "melon") {
//     console.log("Me parece que es una fruta de verano")
// }

// AND &&
// if(fruta == "sandia" && (mes == "diciembre" || mes == "enero" || mes == "febrero" || mes == "marzo")) {
//     console.log("Me parece que es verano")
// }


// if(edad >= 18) {
//     console.log("Sos mayor de edad, podes comprar en la vinoteca")
// } else {
//     console.log("Sos menor de edad, tenes prohibida la compra")
// }


// == vs ===

// if(edad == 18) {
//     console.log("Acabas de convertirte en mayor de edad")
// }
// if(edad === "18") {
//     console.log("Acabas de convertirte en mayor de edad")
// }



// Ciclo FOR

// for("desde"; "hasta"; "actualizacion") {
//     // bloque de codigo a ejecutar
// }

// for(let i=1; i<=10; i++) {
//     console.log(i)
// }

// let numero = parseInt(prompt("Bienvenido! Ingrese la tabla de multiplicar que desee"))
// console.log("Tabla de multiplicar del "+numero)
// for(let i=1; i<=15; i++) {
//     let resultado = numero*i
//     console.log(numero+"x"+i+": "+resultado)
// }

// console.log("Cuenta regresiva")
// for(let i=10; i>=1; i--) {
//     console.log(i)
//     if(i==2) {
//         console.log("Abortar el despegue")
//         break
//     }
//     if(i==1) {
//         console.log("Despegue!")
//     }
// }


// WHILE

// let continuar = true
// while(continuar) {
//     let numero = parseInt(prompt("Bienvenido! Ingrese la tabla de multiplicar que desee"))
//     console.log("Tabla de multiplicar del "+numero)
//     for(let i=1; i<=5; i++) {
//         let resultado = numero*i
//         console.log(numero+"x"+i+": "+resultado)
//     }

    // let confirmacion= prompt("Desea hacer otro calculo? (si/no)").toLowerCase()
    // if(confirmacion == "no") {
    //     continuar = false
    //     console.log("Gracias!")
    // }
// }



// SWITCH-CASE

let continuar = true
while(continuar) {
    let menu = parseInt(prompt("Ingrese 1 para ver su cuenta, 2 para extraccion, 3 para deposito, otro numero para salir"))

    switch(menu) {
        case 1:
            console.log("Total de la cuenta: $80.000")
            break
        case 2:
            console.log("Limite de extraccion: $30.000")
            break
        case 3:
            console.log("Limite de deposito: $40.000")
            break
        default:
            console.log("Opcion incorrecta")
    }

    let confirmacion= prompt("Desea hacer otra operacion? (si/no)").toLowerCase()
    if(confirmacion == "no") {
        continuar = false
        console.log("Retire su tarjeta")
    }

}
