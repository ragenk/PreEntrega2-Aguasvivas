// Segunda Pre-Entrega - Rafael Aguasvivas - Comision#43085
// Simulador de Facturacion para agencia de diseño web

// Array
// Metodo de busqueda y filtrado de array

// Creacion de Clases y Metodos
class Paquetes {
    constructor (plan, precio) {
        this.plan = plan;
        this.precio = precio;
    }

    // Metodo para calcular los impuestos
    // Tambien valida si es un numero positivo y valido
    calcImp(porcentaje) {        
        while (isNaN(porcentaje) || (porcentaje < 0)) {
            if (porcentaje < 0) {
                porcentaje = prompt("No se aceptan numeros negativos. Intenta nuevamente.");
            } else if (isNaN(porcentaje)) {
                porcentaje = prompt("Por favor insertar un porcentaje valido.");
            }  
        }
        return this.precio + (this.precio*(porcentaje/100));
    }
}

class Clientes {
    constructor (nombre, apellido, presupuesto) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.presupuesto = presupuesto;
    }
}

// Declaracion de Objetos
// Objetos - Paquestes
const planBasico = new Paquetes("basico", 4000);
const planPro = new Paquetes("pro", 7000);
const planPremium = new Paquetes("premium", 10000);
// Objetos - Clientes


// Array
const clientes = [];

// Variables Globales
const nombre = prompt("Introduce tu nombre aqui");
const presupuesto = validarPresupuesto(prompt("Introducir presupuesto"));
const impuestos = prompt("Introducir porcentaje de impuestos");
let precioParcial;

// Validacion de Presupuesto Minimo
function validarPresupuesto (cantidad) {
    while ((isNaN(cantidad)) || (cantidad < planBasico.precio)) {
        if (isNaN(cantidad)) {
            cantidad = prompt("Por favor insertar un numbero valido.");
        } else if (cantidad < planBasico.precio) {
            cantidad = prompt("Debes tener un minimo de " + planBasico.precio + " para contratar nuestros servicios.\nFavor aumentar el presupuesto.");
        }
    }
    return cantidad;
}

console.log("Hola " + nombre + ", te damos la bienvenida a nuestra herramienta de cotizaciones.");
console.log("A continuación vamos a elegir el paquete que mejor se ajuste a tu presupuesto.");
console.log("==================================================================================");

// Seleccion de paquete de acuerdo a presupuesto
while (true) {
    if (presupuesto >= planBasico.precio && presupuesto < planPro.precio) {
        precioParcial = planBasico;
        console.log("Nuestro Paquete Basico es el que mejor se ajusta a tu presupuesto.");
        break;
    } else if (presupuesto >= planPro.precio && presupuesto < planPremium.precio) {
        precioParcial = planPro;
        console.log("Nuestro Paquete Pro es el que mejor se ajusta a tu presupuesto.");
        break;
    } else if (presupuesto >= planPremium.precio) {
        precioParcial = planPremium;
        console.log("Nuestro Paquete Premium es el que mejor se ajusta a tu presupuesto.");
        break;
    }
}

// Factura Final
console.log("==================================================================================");
console.log("Detalles de la factura:");
console.log("Sub-Total: $", precioParcial.precio);
console.log("Total (Impuestos Incluidos): $" + precioParcial.calcImp(impuestos));