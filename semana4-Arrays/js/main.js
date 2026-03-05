// const jugador1 = "messi"
// const jugador2 = "dibu martinez"
// const jugador3 = "cuti romero"
// const jugador4 = "lautaro martinez"
// const jugador5 = "julian alvarez"

// const convocados = ["messi", "dibu martinez", "cuti romero", "lautaro martinez", "julian alvarez"]
// console.log(convocados[4])
// console.log(convocados.length)

// .push() --> Añade un nuevo elemento al final del array
// convocados.push("dybala")

// .unshift() --> Añade un nuevo elemento al inicio del array
// convocados.unshift("de paul")

// .pop() --> Quita el ultimo elemento del array
// convocados.pop()

// .shift() --> Quita el primer elemento del array
// convocados.shift()

// .includes() --> Busca un elemento en el array y devuelve T o F segun si lo encuentra o no
// console.log(convocados.includes("dybala"))

// .indexOf() --> Busca un elemento y devuelve el N° de indice, si no lo encuentra da -1
// console.log(convocados.indexOf("de paul"))

// .sort() --> Ordena el array alfabeticamente
// convocados.sort()

// .reverse() --> Invierte el orden del array
// convocados.reverse()
// convocados.sort().reverse()
// console.log(convocados)

// .join() --> Coloca un string entre medio de cada elemento del array
// console.log(convocados)
// console.log(convocados.join(" / "))


// .splice()
// convocados.splice(2,0, "tagliafico")
// console.log(convocados)


// Reloj de andres: digital, recargable, de mano, negro, apple, s11, 10hs

// const relojDeAndres = {
//     // propiedad: valor,
//     marca: "apple",
//     modelo: "series 11",
//     color: "negro",
//     recargable: true,
//     autonomia: 10,
//     digital: true,
//     tipo: "de mano"
// }

// console.log(relojDeAndres.modelo)

// const convocados = ["messi", "dibu martinez", "cuti romero", "lautaro martinez", "julian alvarez"]

const jugador1 = {
    nombre: "messi",
    dorsal: 10,
    posicion: "delantero"
}
const jugador2 = {
    nombre: "dibu martinez",
    dorsal: 23,
    posicion: "arquero"
}
const jugador3 = {
    nombre: "cuti romero",
    dorsal: 13,
    posicion: "defensor"
}
const jugador4 = {
    nombre: "lautaro martinez",
    dorsal: 22,
    posicion: "delantero"
}
const jugador5 = {
    nombre: "julian alvarez",
    dorsal: 9,
    posicion: "delantero"
}

const jugadores = [jugador1, jugador2, jugador3, jugador4, jugador5]

// for-of
for(const jugador of jugadores) {
    console.log(jugador.dorsal, jugador.nombre)
}