var nombre = 'Javier'

//Gracias al párametro, no se modifica la variable global 'nombre'
function imprimirNombreEnMayusculas(nombre){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)