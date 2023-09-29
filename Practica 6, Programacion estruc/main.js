//Definir la clase nodo
class Nodo{
    constructor(valor){
        this.valor = valor
        this.izquierda = null
        this.derecha = null
    }
}

//Definir la clase arbol binario
class arbolBinario{
    constructor(){
        this.raiz = null
    }

    //Metodo de instertar
    insertar(valor){
        const nuevoNodo = new Nodo(valor)

        if(!this.raiz){
            this.raiz = nuevoNodo
        }else{
            this.insertarNodo(this.raiz, nuevoNodo)
        }
    }

    //Metodo insertar nodo
    insertarNodo(nodo, nuevoNodo){
        if(nuevoNodo.valor < nodo.valor){
            if(!nodo.izquierda){
                nodo.izquierda = nuevoNodo
            }else{
                this.insertarNodo(nodo.izquierda, nuevoNodo)
            }
        }else{
            if(!nodo.derecha){
                nodo.derecha = nuevoNodo
            }else{
                this.insertarNodo(nodo.derecha, nuevoNodo)
            }
        }
    }

    recorridoAmplitud(){
        const resultado =[]
        const cola = []

        if(!this.raiz){
            return resultado
        }

        cola.push(this.raiz)

        while(cola.length > 0){
            const nodoActual = cola.shift()
            resultado.push(nodoActual.valor)

            if(nodoActual.izquierda){
                cola.push(nodoActual.izquierda)
            }

            if(nodoActual.derecha){
                cola.push(nodoActual.derecha)
            }
        }

        return resultado
    }

    //Recorrido en profundidad Preorden
    recorridoPreorden(){
        return this.recorridoPreordenNodo(this.raiz, [])
    }
    
    recorridoPreordenNodo(nodo, resultado){
        if(nodo){
            resultado.push(nodo.valor)
            this.recorridoPreordenNodo(nodo.izquierda, resultado)
            this.recorridoPreordenNodo(nodo.derecha, resultado)
        }

        return resultado
    }

    //Recorrido en profundidad orden central
    recorridoOrdenCentral(){
        return this.recorridoOrdenCentralNodo(this.raiz, [])
    }

    recorridoOrdenCentralNodo(nodo, resultado){
        if(nodo){
            this.recorridoOrdenCentralNodo(nodo.izquierda, resultado)
            resultado.push(nodo.valor)
            this.recorridoOrdenCentralNodo(nodo.derecha, resultado)
        }
        
        return resultado
    }

    //Recorrido en Profundidad postOrden
    recorridoPostOrden(){
        return this.recorridoPostOrdenNodo(this.raiz, [])
    }

    recorridoPostOrdenNodo(nodo, resultado){
        if(nodo){
            this.recorridoPostOrdenNodo(nodo.izquierda, resultado)
            this.recorridoPostOrdenNodo(nodo.derecha, resultado)
            resultado.push(nodo.valor)
        }

        return resultado
    }
}

//Crear arbol
const arbol = new arbolBinario()
arbol.insertar(10)
arbol.insertar(5)
arbol.insertar(15)
arbol.insertar(3)
arbol.insertar(7)
arbol.insertar(12)
arbol.insertar(18)

console.log("Recorrido en amplitud", arbol.recorridoAmplitud())
console.log("Recorrido en Profundidad preorden", arbol.recorridoPreorden());
console.log("Recorrido en profundidad Orden Cental", arbol.recorridoOrdenCentral())
console.log("Recorrido en profundidad Post Orden", arbol.recorridoPostOrden())



