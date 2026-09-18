
consultarProductos=[
    {id: 1, nombre: "cafe", precio: 50.00},
    {id: 2, nombre:  "pan", precio: 20.00},
    {id: 3, nombre: "capuchino", precio: 30.00},
    {id: 4,  nombre: "croissant", precio: 25.00}
];

crearPedidos=[
    {
        mostrarMenu: function() {
            console.log("Menu:");
            consultarProductos.forEach(producto => {
                console.log(`- ${producto.nombre}`);
            });
        }
    }

              consultarProductos(){
        console.log("\n Ctalogo de productos");
        console.log('id | nombre | precio');
        consultarProductos.forEach(producto => {
            console.log(`${producto.id} | ${producto.nombre} | $${producto.precio.toFixed(2)}`);
        });
    }
];
