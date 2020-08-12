var nombre = 'Javier', apellido = 'Campos'

//Convertir string a mayúsculas
var nombreEnMayusculas = nombre.toUpperCase()

//Convertir string a minúsculas
var apellidoEnMinusculas = apellido.toLowerCase()

//Obtener primera letra mediante índice, respeta el case
var primeraLetraDelNombre = nombre.charAt(0)

//Obtener tamaño del string
var cantidadDeLetrasDelNombre = nombre.length

//Concatenar
var nombreCompleto = `${nombre} ${apellido}`

//Substring
var str = nombre.substr(1, 2)

/* Reto
Mostrar el último caractér del nombre */
var str2 = nombre.substr(-1)
/* Al dar un índice negativo, en este caso -1
JS lo interpreta como lenght - 1 */