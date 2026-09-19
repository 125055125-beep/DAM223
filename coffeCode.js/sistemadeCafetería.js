// ------------------------------------------------- COCINA -----------------------------------------------------------------------
// Parte 1: Gestión de cocina
let inventario = [];

/*  AGREGAR PRODUCTOS */
// Le agregamos 'precio' aquí para que la caja y el cliente no marquen undefined
function agregar(nombre, precio, stock, categoria ){
    const nuevoProducto = {nombre: nombre, precio: precio, stock: stock, categoria: categoria};
    inventario.push(nuevoProducto);
    console.log("Producto nuevo agregado :D");
};

/* LISTAR PRODUCTOS */
function listar() {
    if(inventario.length == 0) {
        console.log("No hay nada, agrega algo");
        return;
    }
    if(inventario.length >=1) {
        console.log("Lista de productos");
        inventario.forEach(producto => {
            console.log(`Nombre: ${producto.nombre}, Precio: $${producto.precio}, Stock: ${producto.stock}, Categoria: ${producto.categoria}`);
        })

    }
}

function editar(Enombre, Estock, Ecategoria, Eprecio){
    const producto = inventario.find(item => item.nombre == Enombre);

    if (!producto) {
        console.log("No se encuentra ningun objeto con ese nombre\n NOTA: Checa mayusculas, minusculas");
        return;
    }
    producto.stock = Estock !== undefined ? Estock : producto.stock;
    producto.categoria = Ecategoria !== undefined ? Ecategoria : producto.categoria;
    producto.precio = Eprecio !== undefined ? Eprecio : producto.precio;
    console.log("Producto actualizado correctamente");
}

// Eliminar producto
function eliminar(nombreEnc){
    const index = inventario.findIndex(item => item.nombre == nombreEnc)

    if (index === -1) {
        console.log("No se encontro nadota");
        return;
    }

    const eliminado = inventario.splice(index,1);
    console.log(`Producto eliminado: ${eliminado[0].nombre}`)
}


// --------------------------------------------------- CAJA -----------------------------------------------------------------------------
// Parte 2: La caja registradora
const listaPedidos = [];
let totalAcumulado = 0;

function agregarPedido(nombre, precio, cantidad) {
    let subtotal = precio * cantidad;
    let pedido = {
        nombre : nombre,
        precio : precio,
        cantidad : cantidad,
        subtotal : subtotal 
    };

    listaPedidos.push(pedido);
    totalAcumulado = totalAcumulado + subtotal;
    console.log("Pedido agregado: " + nombre + " x" + cantidad + " = $" + subtotal);
}

function mostrarPedidos() {
    console.log("LISTA DE PEDIDOS");

    for (let i = 0; i < listaPedidos.length; i++) {
        let p = listaPedidos[i];
        console.log((i + 1) + ". " + p.nombre + " cantidad: " + p.cantidad + " subtotal: $" + p.subtotal);
    }
}

function mostrarTotal() {
    console.log("totalAcumulado: $" + totalAcumulado);
}


// ------------------------------------------------- CLIENTE -------------------------------------------------------------------------
// Parte 3: Vista del cliente (conectado con la cocina y la caja)

function mostraMenu(){
    console.log("\n ---------------menu del dia-----------------");
    inventario.forEach(function(producto) {
        console.log(`${producto.nombre} | $${producto.precio.toFixed(2)} | Stock: ${producto.stock}`);
    });
}

function consultarProducto(nombreBuscado){
    let producto = inventario.find(function(item){
        return item.nombre === nombreBuscado;
    });

    if (producto) {
        console.log(`${producto.nombre} | $${producto.precio.toFixed(2)}`);
    } else {
        console.log("Producto no encontrado");
    }

    return producto;
}

function crearPedido(nombreProducto, cantidad){
    let producto = consultarProducto(nombreProducto);

    if (!producto){
        return null; 
    }

    if (producto.stock < cantidad){
        console.log("No hay suficiente stock");
        return null;
    }  

    // Descontamos del inventario
    producto.stock = producto.stock - cantidad;
    console.log(`pedido creado por el cliente: ${producto.nombre}`);

    // AQUÍ SE CONECTA CON LA CAJA
    agregarPedido(producto.nombre, producto.precio, cantidad);

    return {
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad
    };
}


// Agregamos productos a la cocina (Nombre, Precio, Stock, Categoria)
agregar("Malteada", 60, 10, "Bebidas");
agregar("Chilaquiles", 75, 5, "Platillos");

// El cliente ve el menú
mostraMenu();

// El cliente pide chilaquiles (se descuenta del inventario y manda el dinero a caja)
crearPedido("Chilaquiles", 2);

// Checamos la caja y el inventario
mostrarPedidos();
mostrarTotal();
listar(); // El stock de chilaquiles ahora es 3