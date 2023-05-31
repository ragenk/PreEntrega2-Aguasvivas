// Segunda Pre-Entrega - Rafael Aguasvivas - Comision#43085
// Base de datos de clientes de agencia de diseño web

// Funcionalidad
// Base de Datos de Clientes
// Nombre, Presupuesto, Paquetes contratados, 
// Pago completo?

// Creacion de clases
class Cliente {
    constructor (nombre, presupuesto, paquete) {
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.paquete = paquete;
    }

    getDatos() {
        console.log("======================");
        console.log("Datos del cliente");
        console.log("Nombre: ", this.nombre);
        console.log("Presupuesto: ", this.presupuesto);
        console.log("Plan Contratado: ", this.paquete);
        console.log("");
    }
}

class Paquete {
    constructor (plan, precio) {
        this.plan = plan;
        this.precio = precio;
    }

    getDatos() {
        console.log("======================");
        console.log("Datos del paquete");
        console.log("Plan: ", this.plan);
        console.log("Precio: ", this.precio)
    }
}


// Array para almacenar los objetos cliente
const arrClientes = [];

// Creacion de instancias de la clase Cliente
const cliente1 = new Cliente("Roman Roy", 4500, "Basico");
const cliente2 = new Cliente("Shiv Roy", 7800, "Pro");
const cliente3 = new Cliente("Kendall Roy", 12000, "Premium");
const cliente4 = new Cliente("Connor Roy", 4200, "Basico");
const cliente5 = new Cliente("Tom Wambsgans", 10000, "Premium");
const cliente6 = new Cliente("Greg Hirsch", 4000, "Basico");

// Agregamos estas intancias al array
arrClientes.push(cliente1, cliente2, cliente3, cliente4, cliente5, cliente6);

// Creacion de instancias de la clase Paquete
const planBasico = new Paquete("Basico", 4000);
const planPro = new Paquete("Pro", 7000);
const planPremium = new Paquete("Premium", 10000);
const planVIP = new Paquete("VIP", 15000);

// Buscador de Clientes
const buscarCliente = prompt("Cliente a consultar");