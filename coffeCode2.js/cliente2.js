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

/* ----------------------------cliente parte 3------------------------------------- */

function seguimientoPedido() {
  console.log("Pedido recibido");

  setTimeout(function () {
    console.log("Preparando.........");
  }, 2000); // Espera 2 segundos

  setTimeout(function () {
    console.log("Empacando.........");
  }, 4000); // Espera 4 segundos

  setTimeout(function () {
    console.log("Pedido Entregado");
  }, 6000); // Espera 6 segundos
}

function seguimientoPedidoCancelado() {
  console.log("Pedido recibido");

  setTimeout(function () {
    console.log("Preparando.........");
  }, 2000);

  setTimeout(function () {
    console.log("Cancelado");
  }, 4000);
}

// Ejecución
seguimientoPedido();