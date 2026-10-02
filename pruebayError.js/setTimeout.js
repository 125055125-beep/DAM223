// sintaxis
setTimeout(función, delay);
setTimeout(función, delay, arg1, arg2, ...);

// ejemplo basico
setTimeout(() => {
  console.log("Esto aparece después de 3 segundos");
}, 3000);


// cancelar un temporizador
const id = setTimeout(() => {
  console.log("No debería ejecutarse");
}, 5000);

clearTimeout(id); // Cancela el timeout



// Función para el flujo exitoso del pedido
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

// Función en caso de que el pedido sea cancelado
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