const productos = [
    { id: 1, nombre: 'Camiseta', precio: 25.99, stock: 10 },
    { id: 2, nombre: 'Pantalon', precio: 34.50, stock: 5 },
    { id: 3, nombre: 'Zapatos', precio: 49.99, stock: 3 },
    { id: 4, nombre: 'Sombrero', precio: 12.75, stock: 15 },
    { id: 5, nombre: 'Calcetines', precio: 6.99, stock: 8 },
];

//Parte 1 
productos.forEach(productos => {
    //creamos una nueva propiedad para almacenar el valor total
    productos.valorTotal = productos.precio * productos.stock;
    //paso2 
    if(productos.valorTotal >= 100){
        productos.descuento = productos.valorTotal * 0.1;
    }

    document.write(`Nombre de producto <b>${productos.nombre}</b> <br>
    Precio: <b>${productos.precio}</b><br>
    Stock: <b>${productos.stock}</b><br>`);
    if(productos.descuento !== undefined ){
        document.write(`Descuento: <b>${productos.descuento}</b><br>`)
    } 
    document.write("--------------<br>")
});

