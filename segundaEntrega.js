// Segunda Pre-Entrega - Rafael Aguasvivas - Comision#43085
// Simulador de Facturacion para agencia de diseño web

// Variables Globales
const nombre = prompt("Introduce tu nombre aqui");
const paqueteBasico = 4000;
const paquetePro = paqueteBasico*1.75;
const paquetePremium = paquetePro*2.5;
const presupuesto = validarPresupuesto(prompt("Introducir presupuesto"));
const impuestos = porcentajeImp(prompt("Introducir porcentaje de impuestos"));
let precioParcial;

// Funciones
// Calculadora de Impuestos
const calculadoraImp = (precio, porcentaje) => precio + (precio*(porcentaje/100));

// Validacion de Impuestos
function porcentajeImp (porciento) {
    while (isNaN(porciento) || (porciento < 0)) {
        if (porciento < 0) {
            porciento = prompt("No se aceptan numeros negativos. Intenta nuevamente.");
        } else if (isNaN(porciento)) {
            porciento = prompt("Por favor insertar un porcentaje valido.");
        }  
    }
    return porciento;
}

// Validacion de Presupuesto Minimo
function validarPresupuesto (cantidad) {
    while ((isNaN(cantidad)) || (cantidad < paqueteBasico)) {
        if (isNaN(cantidad)) {
            cantidad = prompt("Por favor insertar un numbero valido.");
        } else if (cantidad < paqueteBasico) {
            cantidad = prompt("Debes tener un minimo de " + paqueteBasico + " para contratar nuestros servicios.\nFavor aumentar el presupuesto.");
        }
    }
    return cantidad;
}

console.log("Hola " + nombre + ", te damos la bienvenida a nuestra herramienta de cotizaciones.");
console.log("A continuación vamos a elegir el paquete que mejor se ajuste a tu presupuesto.");
console.log("==================================================================================");

// Seleccion de paquete de acuerdo a presupuesto
while (true) {
    if (presupuesto >= paqueteBasico && presupuesto < paquetePro) {
        precioParcial = paqueteBasico;
        console.log("Nuestro Paquete Basico es el que mejor se ajusta a tu presupuesto.");
        break;
    } else if (presupuesto >= paquetePro && presupuesto < paquetePremium) {
        precioParcial = paquetePro;
        console.log("Nuestro Paquete Pro es el que mejor se ajusta a tu presupuesto.");
        break;
    } else if (presupuesto >= paquetePremium) {
        precioParcial = paquetePremium;
        console.log("Nuestro Paquete Premium es el que mejor se ajusta a tu presupuesto.");
        break;
    }
}

// Factura Final
console.log("==================================================================================");
console.log("Detalles de la factura:");
console.log("Sub-Total: $", precioParcial);
console.log("Total (Impuestos Incluidos): $" + calculadoraImp(precioParcial,impuestos));