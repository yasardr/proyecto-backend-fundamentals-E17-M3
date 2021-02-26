/** Clase que representa la solicitud de medicamentos al administrador*/
class Receta{
	constructor(id,idMedicamento,cantidad,idUsuario,fecha,){
		this.id = id;
		this.idMedicamento = idMedicamento;
		this.cantidad = cantidad;
		this.idUsuario = idUsuario;
		this.fecha = fecha;
	}
}