/** Clase que representa los medicamentos en el inventario */
class Producto{
	constructor(id, nombreComercial, nombreGenerico, presentacion, categoria, precioCompra, precioVenta, cantidad, observacion){
		this.id= id; // identificador del medicamento.
		this.nombreComercial = nombreComercial; // 
		this.nombreGenerico = nombreGenerico; // 
		this.presentacion = presentacion; // 
		this.categoria= categoria; // 
		this.precioCompra = precioCompra; //
		this.precioVenta = precioVenta; //
		this.cantidad = cantidad; //
		this.observacion = observacion; //
	}
	
	guardarProducto(){
		// función para guardar un nuevo registro.
	}
	
	modificarProducto(){
        // función para modificar un registro existente.
    }

    eliminarProducto(){
        // función para eliminar un producto existente.
    }

    visualizarProductos(){
        // función para obtener los productos registrados.
	}

}