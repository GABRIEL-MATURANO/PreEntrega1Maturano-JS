
// Clase Producto con constructor
class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    // Método para mostrar la información del producto
    mostrarInfo() {
      return `Nombre: ${this.nombre}, Precio: $${this.precio}`;
    }
  }
  
  // Array para almacenar los productos
  let productos = [];
  
  // Función para agregar un producto al array
  function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    
    // Validar entrada
    if (nombre && !isNaN(precio)) {
      const nuevoProducto = new Producto(nombre, precio);
      productos.push(nuevoProducto);
      alert("Producto agregado correctamente.");
    } else {
      alert("Datos no válidos. Intente nuevamente.");
    }
  }
  
  // Función para mostrar todos los productos
  function mostrarProductos() {
    if (productos.length > 0) {
      let listaProductos = "Lista de productos:\n";
      productos.forEach((producto, index) => {
        listaProductos += `${index + 1}. ${producto.mostrarInfo()}\n`;
      });
      alert(listaProductos);
    } else {
      alert("No hay productos para mostrar.");
    }
  }
  
  // Función para mostrar el menú
  function mostrarMenu() {
    let opcion;
    do {
      opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Ver productos\n3. Salir");
      switch (opcion) {
        case "1":
          agregarProducto();
          break;
        case "2":
          mostrarProductos();
          break;
        case "3":
          alert("Saliendo...");
          break;
        default:
          alert("Opción no válida. Intente nuevamente.");
      }
    } while (opcion !== "3");
  }
  
  // Ejecutar
  mostrarMenu();
  

