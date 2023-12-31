//Bubble sort (Ordenamiento por burbujas)
/*
function blubluSort(arr){
    let len = arr.length
    for(let i = 0; i < len; i++ ){
        for(let j = 0; j < len -1; j++){
            if(arr[j] > arr[i] + 1){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

let arr = [64, 24, 25, 12, 22, 11, 90]
console.log(blubluSort(arr))


//Ejercicio 2
function blubluSort(arr, prop){
    let  len = arr.length
    for (let i = 0; i < len; i++){
        for (let j = 0; j < len - 1; j++){
            if (arr[j][prop] > arr[j + 1][prop]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

let arr = [
    {name: 'john', age: 25},
    {name: 'Mary', age: 30},
    {name: 'Bob', age: 19},
]

console.log(blubluSort(arr, "age"))



//Ejercicio 3
function selectionSort(arr){
    let len = arr.length

    for (let i = 0; i < len - 1; i++){
        let min = i
        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }

        if (min !== i){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

let arr = [64, 45, 25, 22, 11, 92]
console.log(selectionSort(arr))



//ejercicio 2

function selectionSort(arr, prop){
    let len = arr.length
    for (let i = 0; i < len - 1; i++){
        let min = i

        for(let j = i + 1; j < len; j++){
            if(arr[j][prop] < arr[min][prop]){
                min = j
            }
        }

        if (min !== i){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

let arr = [
    {name: 'john', age: 25},
    {name: 'Mary', age: 30},
    {name: 'Bob', age: 19},
]

console.log(selectionSort(arr, "age"))

*/

function insertionSort(arr, prop){
    let len = arr.length
    for (var i = 1; i < len; i++){
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[i][prop] > key[prop]){
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = key
    }
    return arr
}

let arr = [
    {name: 'john', age: 25},
    {name: 'Mary', age: 30},
    {name: 'Bob', age: 19},
]

console.log(insertionSort(arr, "age"))
