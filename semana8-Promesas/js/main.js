// setTimeout()

// console.log("Preparando motores")
// let largada = setTimeout(()=> {
//     console.log("Largada!!")
// }, 3000)
// clearTimeout(largada)



// setInterval
// console.log("Atencion a las banderas amarillas")
// let safetyCar = setInterval(()=> {
//     console.log("Banderas amarillas, seguir al auto de seguridad")
// }, 1000)

// clearInterval(safetyCar)






// try-catch-finally

// let pitsTime = parseFloat(prompt("De cuantos segundos fue la detencion en pits?"))
// let analisis = ""


// try {
//     // bloque de codigo a evaluar
//     if(pitsTime < 3.1) {
//         analisis = "Buena parada, dentro de lo esperado"
//     } else {
//         throw new Error("Parada lenta, perdiste posiciones")
//     }
// } catch(err) {
//     // captura el error
//     analisis = err
// } finally {
//     // OPCIONAL! ejecuta un bloque de codigo si o si
//     console.log("Analisis del pitstop: ",analisis)
// }



// Promesas

function podioChecker (posicion) {
    return new Promise((resolve, reject) => {
        if (posicion > 3) {
            return reject `Terminaste en la posicion "${posicion}" no vas al podio`
        }

        setTimeout(()=> {
            resolve({
                posicion,
                result: "Felicitaciones! Vas al podio"
            })
        }, 1000)
    })
}

podioChecker(2).then(data => console.log(data))

