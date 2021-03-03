class Producto{
    constructor(id, nombreComercial,nombreGenerico, presentacion, unidadMedida, categoria, precioCompra, precioVenta, cantidad, observacion){
        this.id= id; // identificador del producto.
        this.nombreComercial = nombreComercial;  
        this.nombreGenerico = nombreGenerico; 
        this.presentacion = presentacion;
        this.unidadMedida = unidadMedida; //ml | L | Kg | mg
        this.categoria= categoria; // goteros | suspensión | tabletas | ampolletas
        this.precioCompra = precioCompra; // Precio de compra al proveedor
        this.precioVenta = precioVenta; // Precio de venta al público en general
        this.cantidad = cantidad; // Cantidad de productos existentes
        this.observacion = observacion; // Anotaciones al respecto
    } 
}

module.exports = Producto;

