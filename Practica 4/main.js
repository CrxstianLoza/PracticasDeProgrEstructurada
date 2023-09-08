//❖ forEach(): Ejecuta una función para cada elemento del array.

//Ejercicio 1
let numbers =[1, 2, 3]

numbers.forEach(function(number){
    console.log(number*2)
})

//Ejercicio 2
const products =[
    {Name: 'shirt', price: 20},
    {Name: 'Jeans', price: 30},
    {Name: 'Shoes', price: 35},
    {Name: 'Sombrero', price: 15}
]

let totalPrice = 0

products.forEach(function(producto){
    totalPrice += producto.price
})

console.log('Precio total a pagar es de: ', totalPrice)

//❖ map(): Crea un nuevo array aplicando una función a cada elemento del array original.

//Ejercicio 1
let numbers1 = [1, 2, 3]

let nuevoArreglo = numbers1.map(function(number){
    return number * 2
})

console.log(nuevoArreglo)

//Ejercicio 2 
const gCelcius = [0, 15, 45, 23, 32]

const gFarenheith = gCelcius.map (function(celsius){
    //Formula
    return (celsius * 9/5) + 32
})

console.log('Los grados celsius son', gCelcius)
console.log('Los grados farenheith son', gFarenheith)

//filter(): Crea un nuevo array con todos los elementos que pasan una prueba (función proporcionada).

//Ejecicio 1
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const nums2 = nums.filter(function(number){
    return number > 5
})

console.log(nums2)

//Ejercicio 2
const personas = [
    {nombre: 'Cristian', edad: 17},
    {nombre: 'Gabriela', edad: 15},
    {nombre: 'Sonia', edad: 45},
    {nombre: 'Cindy', edad: 28},
    {nombre: 'Paco', edad: 41}
]

const mayores = personas.filter(function(person){
    return person.edad > 18
})

console.log(mayores);

//❖ reduce(): Aplica una función a un acumulador y a cada elemento de un arreglo (de izquierda a derecha) para reducirlo a un solo valor.
let num = [1, 2, 3, 4]

let sum = num.reduce(function(acumulador, valorActual){
    return acumulador + valorActual
})

console.log(sum)

//❖ every(): Comprueba si todos los elementos de un arreglo cumplen una condición dada y devuelve true o false.
let number = [1, 2, 3, 4, 5]

let mayorCero = number.every(function(number){
    return number > 0
})

console.log(mayorCero)

//some(): Comprueba si al menos un elemento de un arreglo cumple una condición dada y devuelve true o false.
let number2 = [1, 2, 3, 4, 5]

let numeroPar = number2.some(function(number){
    return number % 2 == 0
})

console.log(numeroPar)

//❖ sort(): Ordena los elementos de un arreglo en orden alfabetico (sin crear un nuevo arreglo)
let nombres = ['Jesus', 'Cesar', 'Emmanuel', 'Fredy', 'Juan', 'Sofia']

nombres.sort()

console.log(nombres)

