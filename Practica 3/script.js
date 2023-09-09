//METODOS DE MANIPULACION DE ARRAYS EN JAVASCRIPT

//1- push(): Agrega uno o más elementos al final del array.
let numeros = [1, 2, 3];
numeros.push(4, 5);
console.log(numeros); // Output: [1, 2, 3, 4, 5]

//2- pop(): Elimina y devuelve el último elemento del array.
let frutas = ["manzana", "banana", "uva"];
let ultimaF = frutas.pop();
// El método pop() se utiliza para eliminar el último elemento de un arreglo y devuelve ese elemento. En este caso, se elimina "uva" del arreglo fruits y se asigna a la variable ultimaF.
console.log(ultimaF); // Output: "uva"
console.log(frutas);    // Output: ["manzana", "banana"]


//3- unshift(): Agrega uno o más elementos al inicio del array.
let colores = ["verde", "amarillo"];
colores.unshift("azul", "blanco");
console.log(colores); // Output: ["azul", "blanco", "verde", "amarillo"]

//4- shift(): Elimina y devuelve el primer elemento del array.
let paises = ["El Salvador", "Peru", "Mexico"];
let primerP = paises.shift();
console.log(primerP); // Output: "El Salvador"
console.log(paises);    // Output: ["Peru", "Mexico"]

//5- concat(): Combina dos o más arrays para crear un nuevo array.
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinarArray = arr1.concat(arr2);
console.log(combinarArray); // Output: [1, 2, 3, 4]

//6- slice(): Crea una copia superficial (shallow copy) del array con los elementos seleccionados.
let ArrayOriginal = [1, 2, 3, 4, 5];
let copiaArray = ArrayOriginal.slice(1, 4);
console.log(copiaArray); // Output: [2, 3, 4]

//7- splice(): Cambia el contenido de un array eliminando, reemplazando o agregando elementos.
let Frutas = ['banana', 'naranja', 'kiwi', 'pera', 'manzana'];
let removerFruta = Frutas.splice(2, 1, 'uva');
console.log(Frutas);         // Resultado: ['banana', 'naranja', 'uva', 'pera', 'manzana']
console.log(removerFruta);  // Resultado: ['kiwi']

//8- forEach(): Ejecuta una función para cada elemento del array.
let numbers = [1, 2, 3];
numbers.forEach(function(number) {// Este método recibe como argumento una función que será ejecutada para cada elemento del arreglo. En este caso, la función se declara como una función anónima que toma un parámetro llamado "number", que representa cada elemento del arreglo a medida que se recorre.
    console.log(number * 2);//realiza una multiplicación
});
// Output: 2, 4, 6

const products = [
    { name: 'Shirt', price: 20 },
    { name: 'Jeans', price: 50 },
    { name: 'Shoes', price: 80 },
    { name: 'Hat', price: 15 }
];

let totalPrice = 0;

products.forEach(function(product) {
    totalPrice += product.price;// Dentro de la función, tomamos el precio del producto actual (product.price) y lo sumamos al valor actual de totalPrice. Esto se hace para acumular los precios de todos los productos.
});

console.log('Total Price:', totalPrice);


//9- map(): Crea un nuevo array aplicando una función a cada elemento del array original.
let numbers1 = [1, 2, 3];
let nuevoArreglo = numbers1.map(function(number) {
    return number * 2;
});
console.log(nuevoArreglo); // Output: [2, 4, 6]

//convertir grados centigrados a farenheith
const Gcelsius = [0, 15, 30, 5, 10];

const Gfahrenheit = Gcelsius.map(function(celsius) {//argumento celcius
    return (celsius * 9/5) + 32;
});
//formula °F = (°C x 1,8) + 32.
console.log(Gfahrenheit);


//10- filter(): Crea un nuevo array con todos los elementos que pasan una prueba (función proporcionada).
const nums = [2, 8, 3, 6, 10, 4, 7];

const nums2 = nums.filter(function(number) {
    return number > 5;
});

console.log(nums2);

//Supongamos que tienes un arreglo de personas con sus edades, y deseas filtrar aquellas personas que son mayores de 18 años

const personas = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 15 },
    { name: 'Eve', age: 20 }
];

const adultos = personas.filter(function(person) {
    return person.age > 18;
});

console.log(adultos);



