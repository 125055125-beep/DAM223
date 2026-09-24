// ------------------------------------------------- COCINA -----------------------------------------------------------------------
// Gestion de cocina
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
        });
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
    const index = inventario.findIndex(item => item.nombre == nombreEnc);

    if (index === -1) {
        console.log("No se encontro nadota");
        return;
    }

    const eliminado = inventario.splice(index,1);
    console.log(`Producto eliminado: ${eliminado[0].nombre}`);
}


// --------------------------------------------------- CAJA -----------------------------------------------------------------------------
// La caja registradora
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
// Vista de cliente ya funcionando adaptado con caja y cocina :)

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

    // aca se conecta a la caja
    agregarPedido(producto.nombre, producto.precio, cantidad);
    return {
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad
    };
}


// ---------------------------- COFFE PARTE II -----------------------------------------
// ---------------------------- COCINA II -----------------------------------------------
function baratito(limitePrecio = 50) {
    const baratos = inventario.filter(p => p.precio < limitePrecio);

    console.log(`\n--- PRODUCTOS BARATOTOTOTOES (Menos de $${limitePrecio}) ---`);
    if (baratos.length === 0) {
        console.log("No se encontraron productos tan bajos de precios");
    } else {
        baratos.forEach(p => {
            console.log(`- ${p.nombre} | $${p.precio.toFixed(2)} | Cat: ${p.categoria}`);
        });
    }
    return baratos;
}

function caros(limitePrecio = 100) {
    const caros = inventario.filter(p => p.precio >= limitePrecio);

    console.log(`\n--- PRODUCTOS PREMIUM ($${limitePrecio} o más) ---`);

    if (caros.length === 0) {
        console.log("No hay productos tan caros\nPERO si quieres puedes pagar esa misma cantidad por un producto mas barato (porfis)");
    } else {
        caros.forEach(p => {
            console.log(`- ${p.nombre} | $${p.precio.toFixed(2)} | categoria: ${p.categoria}`);
        });
    }

    return caros;
}

function categoria(categoriaB) {
    const filtro = inventario.filter(p => p.categoria.toLowerCase() === categoriaB.toLowerCase());

    console.log(`\n--- CATEGORÍA: ${categoriaB} ---`);

    if (filtro.length === 0) {
        console.log(`No existen productos registrados en la categoria "${categoriaB}".`);
    } else {
        filtro.forEach(p => {
            console.log(`- ${p.nombre} | $${p.precio.toFixed(2)} | Stock: ${p.stock}`);
        });
    }

    return filtro;
}

function buscarProductoUnico(nombreB) {
    const Encontrado = inventario.find(p => p.nombre.toLowerCase() === nombreB.toLowerCase());

    if (Encontrado) {
        console.log(`Encontrado ${Encontrado.nombre} -> $${Encontrado.precio} (Stock: ${Encontrado.stock})`);
    } else {
        console.log(`No se encontro el producto "${nombreB}" tal vez en otra tienda`);
    }
    return Encontrado;
}


// ------------------------------------------------ CAJA II ---------------------------------------------------------------

function calcularTotalConIva() {
  const subtotalGeneral = listaPedidos.reduce(function (acumulado, pedido) {
    return acumulado + pedido.subtotal;
  }, 0);

  const iva = subtotalGeneral * 0.16;
  const totalFinal = subtotalGeneral + iva;

  console.log("\n--- CALCULANDO IVA Y TOTAL ---");
  console.log("Subtotal: $" + subtotalGeneral);
  console.log("IVA: $" + iva.toFixed(2));
  console.log("Total con IVA: $" + totalFinal.toFixed(2));
}


// --------------------------------------------------- CLIENTE II --------------------------------------------------------------
// vinculamos productos a inventarios para que tengan la misma info
let productos = inventario;

function mostrarMenu() {
  console.log("\n---------------menu del dia-----------------");

  productos.forEach(function (producto) {
    console.log(`${producto.nombre} | $${producto.precio.toFixed(2)}`);
  });
}

function mostrarPromociones() {
  const promociones = productos.map(function (producto) {
    let precioConDescuento = producto.precio * 0.9;
    return `${producto.nombre} | antes $${producto.precio.toFixed(2)} | ahora $${precioConDescuento.toFixed(2)}`;
  });

  console.log("\n---------------promociones-----------------");

  promociones.forEach(function (promo) {
    console.log(promo);
  });
}


// ejecucion

console.log("=== 1. AGREGANDO PRODUCTOS DE CAFÉ ===");
agregar("Cafe Americano", 35, 20, "Bebidas");
agregar("Capuchino", 55, 15, "Bebidas");
agregar("Frappe Mocha", 70, 10, "Bebidas");
agregar("Muffin de Arandanos", 40, 12, "Postres");
agregar("Pastel de Chocolate", 65, 8, "Postres");

console.log("\n=== 2. LISTAR INVENTARIO ===");
listar();

console.log("\n=== 3. VISTA DEL CLIENTE Y PROMOCIONES ===");
mostraMenu();
mostrarPromociones();

console.log("\n=== 4. CREAR PEDIDOS EN LA CAFETERÍA ===");
crearPedido("Capuchino", 2);
crearPedido("Muffin de Arandanos", 1);

console.log("\n=== 5. BÚSQUEDAS Y FILTROS (COCINA II) ===");
baratito(45);
caros(60);
categoria("Bebidas");
categoria("Postres");
buscarProductoUnico("Frappe Mocha");

console.log("\n=== 6. CAJA Y TOTALES ===");
mostrarPedidos();
mostrarTotal();
calcularTotalConIva();