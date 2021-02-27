/** Clase que representa a un usuario en la app*/
class Usuario{
	constructor(id, username, name, lastname, email, password, phone, tipo){
		this.id = id;
		this.username = username;
		this.name = name;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.tipo = tipo; //Terapeuta | Usuario normal | Administrador.
	}
}