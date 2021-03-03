class Usuario {
    constructor(id,username,nombre,apellido,email,password,telefono,tipo){
        this.id = id;
        this.username = username;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.telefono = telefono;
        this.tipo = tipo; //Terapeuta | Usuario general | Administrador.
    }
}

module.exports = Usuario;
