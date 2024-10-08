// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    if (10 >= 9) {
        console.log("10 es mayor que 9");
    }
}

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    if (0 == 0) {
        console.log("0 es igual a 0");
    }
}

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    if (7 > 8 && 7 < 10) {
        console.log("Siete es mayor a ocho y menor a 10");
    } else {
        console.log("Siete no cumple con las dos condiciones");
    }
}

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    let producto = 1500;
    let descuento = 0.25;
    let dinero = 1150;

    let precioConDescuento = producto - (producto * descuento);

    if (dinero >= precioConDescuento) {
        console.log("Puedo comprar el producto");
    } else {
        console.log("No puedo comprar el producto");
    }
}

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let mensaje = "Hola JavaScript";
    console.log(mensaje);
}

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    let resultado = 2 + 3;
    console.log("El resultado de la suma es: " + resultado);
}

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    const IS_DISABLED = true;
    console.log("El valor dentro de la constante IS_DISABLED es: " + IS_DISABLED);
}

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    let capacidad = null;
    console.log("La variable capacidad tiene un valor: " + capacidad);
}

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    let dinero = undefined;
    console.log("El valor en la variable dinero es: " + dinero);
}

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    let userName = "Pablo se fue a correr en un maratón y ganó";
    console.log(typeof userName);
}

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    let dogId = 17;

    if (typeof dogId === "string") {
        console.log("El valor dentro de la variable es de tipo string");
    } else {
        console.log("El valor dentro de la variable no es un string");
    }
}

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    console.log("Hola! Me llamo Pablo, este es un mensaje que aparecerá en consola");
}

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    let edad = 30;
    console.log("El valor dentro de la variable edad es: " + edad + " años");
}

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    let version = 2024;
    console.log("La versión de JavaScript es: " + version);
}

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};
