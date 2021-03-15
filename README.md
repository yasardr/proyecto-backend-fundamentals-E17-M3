# proyecto-backend-fundamentals-E17-M3

## Temática del proyecto
MediManage es una API que ofrece la posibilidad de realizar un inventario de medicamentos para su administración, así como para la consulta de estos.

## Objetivo
Desarrollar un API en NodeJS que brinde la posibilidad de consultar, crear, modificar y eliminar medicamentos.

## ¿Quiénes impactan o son impactados por el proyecto?
- Usuario General
- Usuario Terapeuta
- Administrador del sistema

## ¿Cómo impactan en el sistema?
Administrador:
- Creando registros de medicamentos nuevos.
- Visualizando los medicamentos nuevos y existentes.
- Modificando la cantidad de medicamentos existentes.
- Eliminando medicamentos que ya no se utilizan o que ya no existen.

Usuarios:
- Visualizando la disponibilidad de medicamentos.
- Eliminando cantidades de medicamentos vendidos.


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