var javier = {
    nombre: 'Javier',
    apellido: 'Campos',
    edad: 23,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

const MAYORIA_DE_EDAD = 18

/* const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
} */

//Ejecuta lo mismo de arriba,
//gracias a la arrow function
//se ahorran varios caracteres 
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(javier)
imprimirSiEsMayorDeEdad(juan)

const permitirAcceso = persona => 
    !esMayorDeEdad(persona) ? console.log(`ACCESO DENEGADO`) : console.log(`ACCESO PERMITIDO`)


//Reto
const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad })