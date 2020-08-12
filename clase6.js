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

function imprimirNombreEnMayusculas({ nombre }){ //Desestructura el objeto que recibe para rescatar solo una key
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(javier)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({ nombre: 'Pepito' })

/* La consola lanza un error 
imprimirNombreEnMayusculas()
imprimirNombreEnMayusculas({ apellido: 'Gomez' }) */