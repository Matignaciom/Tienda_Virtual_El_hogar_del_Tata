// Definición de la clase Producto para representar un producto en la tienda
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Definición de la clase CarritoDeCompra que gestiona las compras de los clientes
class CarritoDeCompra {
    constructor() {
        this.cliente = '';
        this.productos = [];
    }

    // Método para agregar un producto al carrito con la cantidad especificada
    agregarProducto(producto, cantidad) {
        this.productos.push({ producto, cantidad });
    }

    // Método para calcular el total de la compra
    calcularTotal() {
        return this.productos.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
    }

    // Método para generar la boleta electrónica con el detalle de la compra y el total
    generarBoletaElectronica() {
        let detalleDeVenta = 'Producto        Cantidad        Precio      Subtotal \n';

        this.productos.forEach(item => {
            const subtotal = item.producto.precio * item.cantidad;
            detalleDeVenta += `${item.producto.nombre}       ${item.cantidad}       ${item.producto.precio}     $${subtotal.toFixed(2)} \n`;
        });

        return `${detalleDeVenta}Total: $${this.calcularTotal().toFixed(2)}`;
    }

    // Método para agradecer al cliente por su compra
    agradecerCliente() {
        return `¡Gracias ${this.cliente} por comprar en Tienda El Hogar del Tata!\nQue disfrutes tu compra`;
    }

    // Método para iniciar el proceso de compra
    iniciarCompra() {
        this.cliente = prompt('¡Bienvenido a Tienda El Hogar del Tata!\nIngrese su nombre');

        if (!this.cliente) {
            alert('Compra cancelada. ¡Hasta luego!');
            return;
        }

        let continuar;

        do {
            const nombreProducto = prompt(`Productos de ${this.cliente}\nIngrese nombre del producto:`);

            let cantidadProducto, precioProducto;

            do {
                cantidadProducto = +prompt('Cantidad: ');

                if (isNaN(cantidadProducto)) {
                    alert('Por favor, ingrese un valor numérico para la cantidad.');
                }
            } while (isNaN(cantidadProducto));

            do {
                precioProducto = +prompt('Precio del producto: ');

                if (isNaN(precioProducto)) {
                    alert('Por favor, ingrese un valor numérico para el precio.');
                }
            } while (isNaN(precioProducto));

            const producto = new Producto(nombreProducto, precioProducto);
            this.agregarProducto(producto, cantidadProducto);

            continuar = prompt('¿Desea agregar otro producto? si/no').toLowerCase();
        } while (continuar === 'si');

        alert(this.generarBoletaElectronica());
        alert(this.agradecerCliente());
    }
}

// Instancia de la clase CarritoDeCompra
const carrito = new CarritoDeCompra();
carrito.iniciarCompra();
