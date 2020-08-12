var nombre = 'Javier', apellido = 'Campos'
var edad = 23

/* JS es un lenguaje débilmente tipado, por lo que
la variable edad, aquí pasa a ser un string, y no
lanza ningún tipo de error */
edad = '23 años'

console.log('Hola ' + nombre + ' ' + apellido)
console.log('Tengo ' + edad)

/* Esta variable se usó en el navegador
para confirmar lo mismo que la variable edad */
var peso = 80