//EJEMPLOS

//Declaracion de la funcion saludar
function saludar(){
    console.log('Hola soy una funcion')
}

//Ejecucion de la funcion
saludar()

//Declaracion funcion
function tablaDelsiete(hasta){
    for(let i = 1; i <= hasta; i++){
        console.log(`7 x ${i} = ${7*i}`)
    }
}

//Llamar funcion
tablaDelsiete(10)
tablaDelsiete(5)

//Ejecucion
function tablaDelsiete(tabla ,hasta){
    for(let i = 1; i <= hasta; i++){
        console.log(`${tabla} x ${i} = ${tabla * i}`)
    }
}

//Llamar funcion
tablaDelsiete(5, 10)

//Ejecucion
function tablaDelsiete(tabla, hasta = 10){
    for(let i = 1; i <= hasta; i++){
        console.log(`${tabla} x ${i} = ${tabla * i}`)
    }
}

//Llamar funcion
tablaDelsiete(8) 
tablaDelsiete(8, 5) 

function sumar(a, b){
    return a + b
    console.log('suma realizada')
}

const resutado = sumar(5, 5)
console.log(resutado)


//EJERCICIOS

//Ejercicio 1: Crea una función llamada saludo que muestre un mensaje de saludo en la consola cuando se llame

function saludo(){
    console.log('Hola instructora de programacion estructurada')
}

saludo()

//Ejercicio 2: Crea una función llamada sumar que tome dos números como parámetros y devuelva la suma de esos números.

function sum(a, b){
    return a + b
}

console.log(sum(5, 6))

//Ejercicio 3: Crea una función llamada resta que tome dos números como parámetros y devuelva la resta de esos números

function resta(num1, num2){
    return num1 - num2
}

console.log(resta(5, 2))

//Ejercicio 4: Crea una función llamada multiplicar que tome dos números como parámetros y devuelva la multiplicación de esos números.

function multiplicacion(n1, n2){
    return n1 * n2
}

console.log(multiplicacion(20, 2))

//Ejercicio 5:Escribe una función llamada calcularAreaRectangulo que tome la longitud y la anchura de un rectángulo como parámetros y devuelva su área.

function calcularAreaRectangulo(base, altura){
    return base * altura
}

console.log(`La base de el rectangulo es: ${calcularAreaRectangulo(10, 15)}`)

//Ejercicio 6: Crea una función llamada NumeroPar que tome un número como parámetro y devuelva true si es par y false si es impar

function NumeroPar(numero){
    return numero % 2 == 0
}

console.log(NumeroPar(9))

//Ejercicio 7: Crea una función llamada obtenerCalificacion que tome una puntuación como parámetro, en un rango del 1 al 10, y devuelva una calificación descriptiva de acuerdo con la siguiente escala:

function obtenerCalificacion(nota){
    if (nota >= 9 && nota <= 10){
        return console.log('Exelente')
    } else if(nota >= 7 && nota < 9){
        return console.log('Muy bueno')
    } else if(nota >= 5 && nota < 7){
        return console.log('Bueno')
    }else if(nota >= 3 && nota < 5){
        return console.log('Regular')
    }else if(nota >= 1 && nota < 3){
        return console.log('Deficiente')
    }else{
        return console.log('Puntuacion no valida')
    }
}

obtenerCalificacion(9.2)
obtenerCalificacion(4)
obtenerCalificacion(2)