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


//De esta forma el objeto original no es modificado
function cumpleanios(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}