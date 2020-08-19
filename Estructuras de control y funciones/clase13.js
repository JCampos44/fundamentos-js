var javier = {
    nombre: 'Javier',
    apellido: 'Campos',
    edad: 23,
    peso: 80
}

console.log(`Al inicio del año ${javier.nombre} pesaba ${javier.peso} Kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++){
    var random = Math.random()

    if (random < .25) {
        aumentarDePeso(javier)
    } else if (random < .5){
        adelgazar(javier)
    }
}

console.log(`Al final del año ${javier.nombre} pesa ${javier.peso.toFixed(1)} Kg`)