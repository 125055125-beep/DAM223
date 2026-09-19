

function mostraMenu(){
    console.log("\n ---------------menu del dia-----------------");
    consultarProductos.forEach(function(producto) {
        console.log(`${producto.id} | ${producto.nombre} | $${producto.precio.toFixed(2)}`);
    })

function consultarProducto(){
     let producto = consultarProductos.find(function(productos){
        return productos.id === id;

     });
   if (producto) {
        console.log(`${producto.nombre} | $${producto.precio.toFixed(2)}`);
    } else {
        console.log("Producto no encontrado");
    }

    return producto;

}

function crearPedido(id, cantidad){
        let producto = consultarProducto(producto.id);
        if (producto){
            return null; 

        }

      if (producto.stock < cantidad){
         console.log("No hay suficiente stock");
         return null;
      }  

      producto.stock = producto.stock - cantidad;
      return producto;
      console.log (`pedido creado por el cliente: ${producto.nombre}`);
      return{
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad,

      };
}