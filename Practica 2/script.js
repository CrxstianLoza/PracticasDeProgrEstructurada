// ➢Crea un arreglo con nombres de animales y muestra el arreglo en consola.

let arrayAnimals = ['Vaca', 'Perico', 'Gato', 'Avestruz', 'Gallina']

console.log(arrayAnimals)

// ➢ Crea un arreglo con tus marcas de carros favoritas y muestra la cuarta marca en la consola.

let arrayCars = ['Ford', 'Toyota', 'Nissan', 'Chevrolet', 'Ferrari']

console.log(arrayCars[3])

// ➢ Crea un arreglo con nombres de frutas y muestra la segunda fruta en un alert

let arrayFruts = ['Manzana', 'Kiwi', 'Sandia', 'Melon', 'Tomate']

alert(arrayFruts[1])

// ➢ Crea un arreglo con 5 datos y modifica el tercer dato.

let arrayModified = [1, 5, 8, 9, 12]

arrayModified[2] = 6

console.log(arrayModified)

// ➢ Crea un arreglo de 5 nombres de colonias, utiliza la propiedad length del arreglo para determinar su tamaño y muestre un mensaje que diga "El arreglo contiene [tamaño] colonias", donde [tamaño] es el valor del tamaño del arreglo.

let arrayColonies = ['Toleto', '15 de septiembre', 'Bella Vista', 'La España', 'Los Naranjos']

let coloniesLength = arrayColonies.length

console.log(`El arreglo contiene ${coloniesLength} colonias`)

//➢ Pide al usuario que ingrese cuántos elementos desea agregar al arreglo, utiliza un bucle para solicitar al usuario que ingrese cada elemento uno por uno y guárdalos en el arreglo, luego mostrarlos en consola.

let nElementos = prompt('Ingrese el numero de elementos que desea agregar a su arreglo: ')

let elementos = []

for (i = 0; i < nElementos; i++){
    let elemento = prompt(`Ingrese el elemento numero ${i + 1}`)

    elementos.push(elemento)
}

console.log(elementos)