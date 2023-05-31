// Segunda Pre-Entrega - Rafael Aguasvivas - Comision#43085
// Base de datos de clientes de agencia de diseño web

// Creacion de clases
class Cliente {
    constructor (nombre, presupuesto) {
        this.nombre = nombre;
        while (presupuesto < 4000) {
            presupuesto = parseInt(prompt("El presupuesto minimo es 4000. Por favor introducir un presupuesto mayor."));
        }
        this.presupuesto = presupuesto;
        if (presupuesto < 7000) {
            this.paquete = "Basico";
        } else if (presupuesto < 10000) {
            this.paquete = "Pro";
        } else if (presupuesto < 15000) {
            this.paquete = "Premium";
        } else {
            this.paquete = "VIP";
        }
    }

    getDatos() {
        console.log("======================");
        console.log("Datos del cliente");
        console.log("Nombre: ", this.nombre);
        console.log("Presupuesto: ", this.presupuesto);
        console.log("Plan Contratado: ", this.paquete);
    }
}

// Variables globales
let nombre;
let presupuesto;
let continuar = null;

// Array para almacenar los objetos cliente
const arrClientes = [];

// Creacion de instancias de ejemplo de la clase Cliente
const cliente1 = new Cliente("Roman", 4500);
const cliente2 = new Cliente("Shiv", 7800);
const cliente3 = new Cliente("Kendall", 12000);
const cliente4 = new Cliente("Connor", 4200);
const cliente5 = new Cliente("Tom", 10000);
const cliente6 = new Cliente("Greg", 4000);

// Agregamos las instancias de ejemplo al array usando push()
arrClientes.push(cliente1, cliente2, cliente3, cliente4, cliente5, cliente6);

// Agregar instancias nuevas al array
while (continuar != "NO") {
    nombre = prompt("Introduce nombre del cliente a agregar");
    presupuesto = parseInt(prompt("Introduce el presupuesto de este cliente"));
    arrClientes.push(new Cliente(nombre, presupuesto));    
    continuar = prompt("¿Introducir otro cliente? SI o NO");
}

// Funciones de Orden Superior
// Buscador de Clientes usando find()
const clienteBuscado = prompt("Buscar cliente.\nEjemplo (Roman, Shiv, Kendall, Connor, Tom, Greg).\nO el cliente nuevo recien agregado.");
const buscarCliente = arrClientes.find(cliente => cliente.nombre === clienteBuscado);

if (buscarCliente) {
    buscarCliente.getDatos();
} else {
    console.log("El cliente no se encuentra en la base de datos.");
}

// Filtrar clientes por rango de presupuesto usando filter()
let minPresupuesto = parseInt(prompt("Filtrar clientes por rango de presupuesto minimo y maximo.\nPor favor introduzca el presupuesto minimo:"));
let maxPresupuesto = parseInt(prompt("Introduzca el presupuesto maximo:"));
if (minPresupuesto > maxPresupuesto) {
    while (minPresupuesto > maxPresupuesto) {
        minPresupuesto = parseInt(prompt("Presupuesto minimo no puede ser mayor que el presupuesto maximo.\nIntroduzca el presupuesto minimo nuevamente."))
        maxPresupuesto = parseInt(prompt("Introduzca el presupuesto maximo:"));
    }
}
const filtrarPresupuesto = arrClientes.filter(cliente => ((cliente.presupuesto >= minPresupuesto) && (cliente.presupuesto <= maxPresupuesto)));

if (filtrarPresupuesto.length === 0) {
    console.log("No se encontraron clientes en este rango de presupuesto");
} else {
    console.log("======================");
    console.log(`Estos son los clientes con un presupuesto entre ${minPresupuesto} y ${maxPresupuesto} contratado.`);
    for (let i = 0; i < filtrarPresupuesto.length; i++) {
        filtrarPresupuesto[i].getDatos();
    };
}