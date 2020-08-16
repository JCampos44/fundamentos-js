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

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)

    if (persona.ingeniero){
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }
    if (persona.cocinero){
        console.log('Cocinero')
    }
    if (persona.cantante){
        console.log('Cantante')
    }
    if (persona.dj){
        console.log('DJ')
    }
    if (persona.guitarrista){
        console.log('Guitarrista')
    }
    if (persona.drone){
        console.log('Piloto de drone')
    }
}

imprimirProfesiones(javier)

//Reto
function imprimirSiEsMayorDeEdad(persona){
    persona.edad >= 18 ? console.log('Es mayor de edad') : console.log('Es menor de edad')
}

imprimirSiEsMayorDeEdad(javier)