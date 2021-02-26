/** Clase que representa la solicitud de medicamentos al administrador*/
class Receta{
	constructor(id,idProducto,cantidad,idUsuario,fecha,){
		this.id = id;
		this.idProducto = idProducto;
		this.cantidad = cantidad;
		this.idUsuario = idUsuario;
		this.fecha = fecha;
	}
}