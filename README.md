# proyecto-backend-fundamentals-E17-M3

## Temática del proyecto
Crear un proyecto llamado MediManage que será una API que ofrezca la posibilidad de realizar un inventario de medicamentos para su administración, así como para la consulta de estos.

## Objetivo
Desarrollar un API en NodeJS que brinde la posibilidad de consultar, crear, modificar y eliminar medicamentos e información de los proveedores.

## ¿Quiénes impactan o son impactados por el proyecto?
- Usuario
- Administrador del sistema

## ¿Cómo impactan en el sistema?
Administrador
Creando registros de medicamentos nuevos.
Visualizando los medicamentos nuevos y existentes.
Modificando la cantidad de medicamentos existentes.
Eliminando medicamentos que ya no se utilizan o que ya no existen.
Agregando nuevos proveedores para enlazar con los medicamentos.
Modificando proveedores existentes.
Visualizando a todos los proveedores.
Eliminar proveedores.

Usuarios
Visualizando la disponibilidad de medicamentos.
Eliminando cantidades de medicamentos vendidos


## Historias de usuario

### Como administrador:
- Quiero consultar la cantidad y tipo de medicamentos para solicitar más cuando están por acabarse.
- Quiero agregar medicamentos al inventario para tener un control.
- Quiero eliminar medicamentos por si hay equivocaciones o si alguno se deja de vender para que no cause problemas en mi inventario y si no hay en existencia.
- Quiero editar la información del medicamento para tener mi inventario actualizado y corregir errores.
### Como terapeuta:
- Quiero crear recetas en las cuales incluya medicamentos del inventario.
- Quiero que se actualice la cantidad de medicamentos disponibles después de venderlos.
- Quiero ver los medicamentos disponibles para saber si existe la medicina que necesita mi paciente.
### Como usuario:
- Quiero visualizar los precios y disponibilidad de los medicamentos para su compra.

## Clases de JavaScript

    /** Clase que representa los medicamentos en el inventario */
    class Producto{
      constructor(id, nombreComercial,nombreGenerico, presentacion, categoria, precioCompra, precioVenta, cantidad, observacion){
        this.id= id; // identificador del producto.
        this.nombreComercial = nombreComercial;  
        this.nombreGenerico = nombreGenerico; 
        this.presentacion = presentacion; // ml | mg | unidades
        this.categoria= categoria; // goteros | suspensión | tabletas | ampolletas
        this.precioCompra = precioCompra; // Precio de compra al proveedor
        this.precioVenta = precioVenta; // Precio de venta al público en general
        this.cantidad = cantidad; // Cantidad de productos existentes
        this.observacion = observacion; // Anotaciones al respecto
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



      /** Clase que representa a un usuario en la app*/
      class Usuario {
        constructor(id,username,name,lastname,email,password,phone,tipo){
          this.id = id;
          this.username = username;
          this.name = name;
          this.lastname = lastname;
          this.email = email;
          this.password = password;
          this.phone = phone;
          this.tipo = tipo; //Terapeuta | Usuario general | Administrador.
        }
      }


      /** Clase que representa la solicitud de medicamentos al administrador*/
      class Solicitud {
        constructor(id,idProducto,cantidad,idUsuario,fecha,){
          this.id = id;
          this.idProducto = idProducto;
          this.cantidad = cantidad;
          this.idUsuario = idUsuario;
          this.fecha = fecha;
        }
      }
