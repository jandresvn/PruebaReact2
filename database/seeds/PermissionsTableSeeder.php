<?php

use Illuminate\Database\Seeder;
use Caffeinated\Shinobi\Models\Permission;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
              //Ventas
              Permission::create([
                'name'        => 'Nueva venta',
                'slug'        => 'venta.nueva',
                'description' => 'Permite realizar una nueva venta',
                'tipo_permiso_id' => 2
              ]);

              //Devoluciones
              Permission::create([
                'name'        => 'Nueva devolución',
                'slug'        => 'devolucion.nueva',
                'description' => 'Permite realizar una nueva devolución',
                'tipo_permiso_id' => 2
              ]);

              //Apertura Caja
              Permission::create([
                'name'        => 'Apertura de Caja',
                'slug'        => 'apertura',
                'description' => 'Permite realizar apertura de caja',
                'tipo_permiso_id' => 2
              ]);

              //Cierre Caja
              Permission::create([
                'name'        => 'Cierre de Caja',
                'slug'        => 'cierre',
                'description' => 'Permite realizar el cierre de caja',
                'tipo_permiso_id' => 2
              ]);


              //Inventario
              Permission::create([
                'name'        => 'Listado  del inventario',
                'slug'        => 'inventario.index',
                'description' => 'Ver el listado de todos los productos del inventario del sistema',
                'tipo_permiso_id' => 2
              ]);

              Permission::create([
                'name'        => 'Ingreso de producto al inventario',
                'slug'        => 'inventario.entrada',
                'description' => 'Crear una entrada de inventario para el sistema',
                'tipo_permiso_id' => 2
              ]);

              Permission::create([
                'name'        => 'Salida de producto al inventario',
                'slug'        => 'inventario.salida',
                'description' => 'Crear una salida de inventario para el sistema',
                'tipo_permiso_id' => 2
              ]);



              //Pedido
              Permission::create([
                'name'        => 'Listado del productos para realizar pedidos',
                'slug'        => 'pedidos.index',
                'description' => 'Ver el listado de todos los productos del inventario para realizar un pedidos al proveedor',
                'tipo_permiso_id' => 2
              ]);

              Permission::create([
                'name'        => 'Realizar el pedido del producto al proveedor',
                'slug'        => 'pedidos.create',
                'description' => 'Crear una pedido que se le envia la proveedor por medios de un correo',
                'tipo_permiso_id' => 2
              ]);

              Permission::create([
                'name'        => 'Cambiar el estado del pedido',
                'slug'        => 'pedidos.edit_estado',
                'description' => 'Permite cambiar el estado del pedido a entregado o cancelado',
                'tipo_permiso_id' => 2
              ]);

              //Pago Proveedores

              Permission::create([
                'name'        => 'Pago a proveedores',
                'slug'        => 'pago_proveedor.create',
                'description' => 'Realizar el pago a proveedores',
                'tipo_permiso_id' => 2
              ]);

              //Movimiento Caja
              Permission::create([
                'name'        => 'Movimiento de Caja',
                'slug'        => 'movimiento_caja.create',
                'description' => 'Realizar movimiento en efectivo de la caja',
                'tipo_permiso_id' => 2
              ]);


              //Producto
              Permission::create([
                'name'        => 'Listado de productos',
                'slug'        => 'producto.index',
                'description' => 'Ver el listado de todos los productos del sistema',
                'tipo_permiso_id' => 1
              ]);

              Permission::create([
                'name'        => 'Crear producto',
                'slug'        => 'producto.create',
                'description' => 'Crear un producto para el sistema',
                'tipo_permiso_id' => 1
              ]);

              Permission::create([
                'name'        => 'Editar producto',
                'slug'        => 'producto.edit',
                'description' => 'Editar cualquier dato del producto del sistema',
                'tipo_permiso_id' => 1
              ]);

              Permission::create([
                'name'        => 'Ver producto',
                'slug'        => 'producto.show',
                'description' => 'Ver cualquier dato del producto del sistema',
                'tipo_permiso_id' => 1
              ]);



              //Proveedores
              Permission::create([
                'name'        => 'Listado  de proveedores',
                'slug'        => 'proveedor.index',
                'description' => 'Ver el listado de todos los proveedores del sistema',
                'tipo_permiso_id' => 1
              ]);

              Permission::create([
                'name'        => 'Crear proveedor',
                'slug'        => 'proveedor.create',
                'description' => 'Crear un proveedor para el sistema',
                'tipo_permiso_id' => 1
              ]);

              Permission::create([
                'name'        => 'Editar proveedor',
                'slug'        => 'proveedor.edit',
                'description' => 'Editar cualquier dato de un proveedor del sistema',
                'tipo_permiso_id' => 1
              ]);




              //Usuarios
              Permission::create([
                'name'        => 'Listado de usuarios',
                'slug'        => 'usuario.index',
                'description' => 'Ver el listado de todos los usuarios del sistema',
                'tipo_permiso_id' => 1
              ]);

              Permission::create([
                'name'        => 'Crear usuario',
                'slug'        => 'usuario.create',
                'description' => 'Crear un usuario para el sistema',
                'tipo_permiso_id' => 1
              ]);

              Permission::create([
                'name'        => 'Editar usuario',
                'slug'        => 'usuario.edit',
                'description' => 'Editar cualquier dato de un usuario del sistema',
                'tipo_permiso_id' => 1
              ]);



              //Roles
              Permission::create([
                'name'        => 'Listado de roles',
                'slug'        => 'role.index',
                'description' => 'Ver el listado de todos los roles del sistema',
                'tipo_permiso_id' => 3
              ]);

              Permission::create([
                'name'        => 'Crear role',
                'slug'        => 'role.create',
                'description' => 'Crear un rol y asignar permisos al rol para el sistema',
                'tipo_permiso_id' => 3
              ]);

              Permission::create([
                'name'        => 'Editar rol',
                'slug'        => 'role.edit_permisos',
                'description' => 'Editar el rol y los permisos del rol del sistema',
                'tipo_permiso_id' => 3
              ]);

              //Cajas

              Permission::create([
                'name'        => 'Listado de cajas',
                'slug'        => 'caja.index',
                'description' => 'Ver el listado de todos las cajas del sistema',
                'tipo_permiso_id' => 1
              ]);

              Permission::create([
                'name'        => 'Crear caja',
                'slug'        => 'caja.create',
                'description' => 'Crear una caja para el sistema',
                'tipo_permiso_id' => 1
              ]);

              Permission::create([
                'name'        => 'Editar caja',
                'slug'        => 'caja.edit',
                'description' => 'Editar cualquier dato de una caja del sistema',
                'tipo_permiso_id' => 1
              ]);


              //Reportes
              Permission::create([
                'name'        => 'Listado de reportes',
                'slug'        => 'reportes.index',
                'description' => 'Ver el listado de los reportes',
                'tipo_permiso_id' => 4
              ]);


              Permission::create([
                'name'        => 'Reporte inventario por producto',
                'slug'        => 'reportes.inventario_producto',
                'description' => 'Permite descargar reporte',
                'tipo_permiso_id' => 4
              ]);

              Permission::create([
                'name'        => 'Reporte salida inventario por proveedor',
                'slug'        => 'reportes.salida_producto',
                'description' => 'Permite descargar reporte',
                'tipo_permiso_id' => 4
              ]);

              Permission::create([
                'name'        => 'Reporte entrada inventario por producto',
                'slug'        => 'reportes.entrada_producto',
                'description' => 'Permite descargar reporte',
                'tipo_permiso_id' => 4
              ]);

              Permission::create([
                'name'        => 'Reporte devoluciones',
                'slug'        => 'reportes.devoluciones',
                'description' => 'Permite descargar reporte',
                'tipo_permiso_id' => 4
              ]);

              Permission::create([
                'name'        => 'Reporte de cierre de cajas',
                'slug'        => 'reportes.cierre_cajas',
                'description' => 'Permite descargar reporte',
                'tipo_permiso_id' => 4
              ]);


              Permission::create([
                'name'        => 'Reporte ventas por producto',
                'slug'        => 'reportes.ventas',
                'description' => 'Permite descargar reporte',
                'tipo_permiso_id' => 4
              ]);

              Permission::create([
                'name'        => 'Reporte pago proveedores totalizado',
                'slug'        => 'reportes.pago_proveedores',
                'description' => 'Permite descargar reporte',
                'tipo_permiso_id' => 4
              ]);

              Permission::create([
                'name'        => 'Reporte pago proveedores por proveedor',
                'slug'        => 'reportes.pago_proveedores_proveedor',
                'description' => 'Permite descargar reporte',
                'tipo_permiso_id' => 4
              ]);

              Permission::create([
                'name'        => 'Reporte movimientos de caja',
                'slug'        => 'reportes.entrada_efectivo',
                'description' => 'Permite descargar reporte',
                'tipo_permiso_id' => 4
              ]);




              //Respaldos BD

              Permission::create([
                'name'        => 'Página de Respaldos de Base de Datos',
                'slug'        => 'base_datos.index',
                'description' => 'Muestra la página de respaldo de BD del sistema',
                'tipo_permiso_id' => 5
              ]);

              Permission::create([
                'name'        => 'Crear un respaldo de Base de Datos',
                'slug'        => 'base_datos.backup',
                'description' => 'Crear un respaldo de base de datos para el sistema',
                'tipo_permiso_id' => 5
              ]);

              Permission::create([
                'name'        => 'Restaurar Base de Datos',
                'slug'        => 'base_datos.restore',
                'description' => 'Restaura un respaldo de base de datos para el sistema',
                'tipo_permiso_id' => 5
              ]);

              Permission::create([
                'name'        => 'Eliminar respaldo Base de Datos',
                'slug'        => 'base_datos.delete',
                'description' => 'Elimina un respaldo de base de datos para el sistema',
                'tipo_permiso_id' => 5
              ]);


              Permission::create([
                'name'        => 'Página de bitácora ',
                'slug'        => 'bitacora.index',
                'description' => 'Muestra la página de bitácora del  sistema',
                'tipo_permiso_id' => 5
              ]);


              Permission::create([
                'name'        => 'Descargar bitácora',
                'slug'        => 'bitacora.descargar',
                'description' => 'Descarga la bitácora seleccionada',
                'tipo_permiso_id' => 5
              ]);

              Permission::create([
                'name'        => 'Eliminar bitácora',
                'slug'        => 'bitacora.delete',
                'description' => 'Elimina la bitácora seleccionada',
                'tipo_permiso_id' => 5
              ]);




    }
}
