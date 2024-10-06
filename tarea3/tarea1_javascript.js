// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    if (10 >= 9) {
        console.log("10 es mayor que 9")
    }
}

compareTenAndNine()

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    if ( 0 == 0) {
        console.log("0 es igual a 0")
    }
}

compareZeroAndZero()

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    if (7 > 8 && 7 < 10){
        console.log("Siete es mayor a ocho y menor a 10")
    } else {
        console.log("Siete no cumple con las dos condiciones")
    }
}

compareSeven()

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    let producto = 1500
    let descuento = 0.25
    let dinero = 1150

    let precioConDescuento = producto - (producto*descuento)

    if (dinero >= precioConDescuento){
        console.log("Puedo comprar el producto")
    } else {
        console.log("No puedo comprar el producto")
    }
}

canBuyProduct()

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let mensaje = "Hola JavaScript"

    console.log(mensaje)
}

createMessageVariable()

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    let resultado = 2 + 3;
    console.log("El resultado de la suma es: ", resultado)
}

createSumVariable()

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    const IS_DISABLED = true
    console.log("El valor dentro de la constante IS_DISABLED es: ",IS_DISABLED)
}

createDisabledConstant()
