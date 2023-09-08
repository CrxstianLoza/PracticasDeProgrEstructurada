//EJERCICI0 1
    //❖ filter(): Crea un nuevo array con todos los elementos que pasan una prueba (función proporcionada).

const autos =[
    {Marca: 'Toyota', Anio: 2023},
    {Marca: 'Ford', Anio: 2010},
    {Marca: 'Nissan', Anio: 2005},
    {Marca: 'Chevrolet', Anio: 2021},
    {Marca: 'Honda', Anio: 1999}
]

const autosNuevos = autos.filter(function(recientes){
    return recientes.Anio > 2010
})

console.log('Los autos mas recientes son: ', autosNuevos)
//EJERCICIO 2
    //❖ every(): Comprueba si todos los elementos de un arreglo cumplen una condición dada y devuelve true o false.

let numeros = [3, 6, 9, 12, 15, 18, 21]

let multiploDe3 = numeros.every(function(numeros){
    return numeros % 3 == 0
})

console.log(multiploDe3)
//EJERCICIO 3
    //❖ sort(): Ordena los elementos de un arreglo en orden alfabetico (sin crear un nuevo arreglo)

const empleados = ['Fernanda', 'Mauricio', 'Evelyn', 'Josue', 'Victor', 'Abdon']

empleados.sort()

console.log(empleados)