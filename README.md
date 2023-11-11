# Tienda El Hogar del Tata

Bienvenido a Tienda El Hogar del Tata, una tienda ficticia donde puedes realizar tus compras en línea. Este proyecto implementa un carrito de compras básico en JavaScript.

## Uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Matignaciom/tienda-el-hogar-del-tata.git
   ```

2. Abre el archivo `index.html` en tu navegador web.

3. Sigue las instrucciones para agregar productos al carrito y finalizar la compra.

## Ejemplo de Código

```javascript
// Importa la clase CarritoDeCompra (asegúrate de que el archivo esté enlazado correctamente)
const CarritoDeCompra = require('./carritoDeCompra');

// Crea una instancia de la clase CarritoDeCompra
const carrito = new CarritoDeCompra();

// Inicia el proceso de compra
carrito.iniciarCompra();

// Ejemplo adicional: Agregar un producto específico al carrito
const productoEjemplo = new Producto('Ejemplo', 19.99);
carrito.agregarProducto(productoEjemplo, 3);

// Genera una boleta electrónica con el nuevo producto
console.log(carrito.generarBoletaElectronica());
```
