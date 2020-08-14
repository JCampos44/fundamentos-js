var javier = {
    nombre: 'Javier',
    apellido: 'Campos',
    edad: 23
}

var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona){ 
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(javier)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({ nombre: 'Pepito' })

/* La consola lanza un error 
imprimirNombreEnMayusculas()
imprimirNombreEnMayusculas({ apellido: 'Gomez' }) */


//Reto
function imprimirNombreYEdad(persona){
    //Hola me llamo Javier y tengo 23 años
    var { nombre, edad } = persona
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(javier)