<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//AUTH

Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');

Route::post('password/email', 'Api\ForgotPasswordController@sendResetLinkEmail');
Route::post('password/reset', 'Api\ResetPasswordController@reset');

Route::middleware(['auth'])->group(function () {

    //USUARIOS

    Route::get('usuarios', 'Api\UserController@index')->middleware('permission:usuario.index');
    Route::get('usuarios/nuevo', 'Api\UserController@create')->middleware('permission:usuario.create');
    Route::post('usuarios/nuevo', 'Api\UserController@store')->middleware('permission:usuario.create');
    Route::get('usuarios/editar/{id}', 'Api\UserController@edit')->middleware('permission:usuario.edit');
    Route::put('usuarios/editar/{id}', 'Api\UserController@update')->middleware('permission:usuario.edit');
    Route::get('usuario/editar_contrasena', 'Api\UserController@editPassword');
    Route::post('usuario/editar_contrasena', 'Api\UserController@updatePassword');




    //ROLES

    Route::get('roles', 'Api\RoleController@index')->middleware('permission:role.index');
    Route::get('roles/nuevo', 'Api\RoleController@create')->middleware('permission:role.create');
    Route::post('roles/nuevo', 'Api\RoleController@store')->middleware('permission:role.create');
    Route::get('roles/editar/{id}', 'Api\RoleController@edit')->middleware('permission:role.edit_permisos');
    Route::put('roles/editar/{id}', 'Api\RoleController@update')->middleware('permission:role.edit_permisos');




    //PRODUCTOS

    Route::get('productos', 'Api\ProductoController@index')->middleware('permission:producto.index');
    Route::post('productos/buscar', 'Api\ProductoController@search')->middleware('permission:producto.index');
    Route::get('productos/nuevo', 'Api\ProductoController@create')->middleware('permission:producto.create');
    Route::post('productos/nuevo', 'Api\ProductoController@store')->middleware('permission:producto.create');
    Route::get('productos/editar/{id}', 'Api\ProductoController@edit')->middleware('permission:producto.edit');
    Route::put('productos/editar/{id}', 'Api\ProductoController@update')->middleware('permission:producto.edit');
    Route::get('productos/ver/{id}', 'Api\ProductoController@show')->middleware('permission:producto.show');

    //INVENTARIO

    Route::get('inventario/entrada/{id}', 'Api\InventarioController@createEntradaInventario')->middleware('permission:inventario.entrada');
    Route::put('inventario/entrada/{id}', 'Api\InventarioController@storeEntradaInventario')->middleware('permission:inventario.entrada');

    Route::get('inventario', 'Api\InventarioController@index')->middleware('permission:inventario.index');
    Route::post('inventario/buscar', 'Api\InventarioController@search')->middleware('permission:inventario.index');
    Route::get('inventario/producto/{id}', 'Api\InventarioController@indexInventarioPorProducto')->middleware('permission:inventario.index');
    Route::get('inventario/salidaVencidos', 'Api\InventarioController@indexSalidaInventarioVencidos')->middleware('permission:inventario.index');

    Route::get('inventario/nueva_salida/{id}', 'Api\InventarioController@createSalidaInventario')->middleware('permission:inventario.salida');
    Route::put('inventario/nueva_salida/{id}', 'Api\InventarioController@storeSalidaInventario')->middleware('permission:inventario.salida');






    //Solicitud Pedido

    Route::get('pedidos', 'Api\PedidoController@index')->middleware('permission:pedidos.index');
    Route::post('pedidos/buscar', 'Api\PedidoController@search')->middleware('permission:pedidos.index');
    Route::get('pedidos/pedidos_requeridos', 'Api\PedidoController@indexPedidosRequeridos')->middleware('permission:pedidos.index');
    Route::get('pedidos/realizar_pedido/{id}', 'Api\PedidoController@createSolicitudPedido')->middleware('permission:pedidos.create');
    Route::put('pedidos/realizar_pedido/{id}', 'Api\PedidoController@store')->middleware('permission:pedidos.create');
    Route::get('pedidos/listado_pedidos', 'Api\PedidoController@indexListaPedidos')->middleware('permission:pedidos.index');
    Route::put('pedidos/editar', 'Api\PedidoController@storeEstadoPedido')->middleware('permission:pedidos.edit_estado');

    //PROVEEDORES

    Route::get('proveedores', 'Api\ProveedorController@index')->middleware('permission:proveedor.index');
    Route::post('proveedores/buscar', 'Api\ProveedorController@search')->middleware('permission:proveedor.index');
    Route::get('proveedores/nuevo', 'Api\ProveedorController@create')->middleware('permission:proveedor.create');
    Route::post('proveedores/nuevo', 'Api\ProveedorController@store')->middleware('permission:proveedor.create');
    Route::get('proveedores/editar/{id}', 'Api\ProveedorController@edit')->middleware('permission:proveedor.edit');
    Route::put('proveedores/editar/{id}', 'Api\ProveedorController@update')->middleware('permission:proveedor.edit');


    //APERTURA DE CAJA
    Route::get('apertura/validar', 'Api\ProcesoCajaController@verificarApertura')->middleware('permission:apertura');
    Route::post('apertura/nueva', 'Api\ProcesoCajaController@storeApertura')->middleware('permission:apertura');


    //Venta

    Route::get('venta/nueva', 'Api\FacturaController@getDetalles')->middleware('permission:venta.nueva');
    Route::post('venta/agregar', 'Api\FacturaController@postAgregarDetalle')->middleware('permission:venta.nueva');
    Route::post('venta/elminar_detalle', 'Api\FacturaController@postEliminarDetalle')->middleware('permission:venta.nueva');
    Route::post('venta/facturar', 'Api\FacturaController@store')->middleware('permission:venta.nueva');
    Route::post('venta/agregar_nota_credito', 'Api\FacturaController@agregarNotaCredito')->middleware('permission:venta.nueva');
    Route::post('venta/eliminar_nota_credito', 'Api\FacturaController@postEliminarNotaCredito')->middleware('permission:venta.nueva');
    Route::post('venta/eliminar_venta', 'Api\FacturaController@destroyVenta')->middleware('permission:venta.nueva');
    Route::get('venta/factura/{id}', 'Api\FacturaController@imprimirFactura')->middleware('permission:venta.nueva');


    //Caja
    Route::get('cajas', 'Api\CajaController@index')->middleware('permission:caja.index');
    Route::post('cajas/buscar', 'Api\CajaController@search')->middleware('permission:caja.index');
    Route::get('cajas/nuevo', 'Api\CajaController@create')->middleware('permission:caja.create');
    Route::post('cajas/nuevo', 'Api\CajaController@store')->middleware('permission:caja.create');
    Route::get('cajas/editar/{id}', 'Api\CajaController@edit')->middleware('permission:caja.edit');
    Route::put('cajas/editar/{id}', 'Api\CajaController@update')->middleware('permission:caja.edit');

    //Pago Proveedores
    Route::get('pago_proveedor/nuevo', 'Api\PagoProveedorController@create')->middleware('permission:pago_proveedor.create');
    Route::post('pago_proveedor/nuevo', 'Api\PagoProveedorController@store')->middleware('permission:pago_proveedor.create');


    //Devoluciones

    Route::get('devolucion/nueva', 'Api\DevolucionController@index')->middleware('permission:devolucion.nueva');
    Route::post('devolucion/agregar', 'Api\DevolucionController@agregarFactura')->middleware('permission:devolucion.nueva');
    Route::post('devolucion/agregar_devolucion', 'Api\DevolucionController@agregarDevolucion')->middleware('permission:devolucion.nueva');
    Route::post('devolucion/eliminar_detalle', 'Api\DevolucionController@postEliminarDetalle')->middleware('permission:devolucion.nueva');
    Route::post('devolucion/facturar', 'Api\DevolucionController@store')->middleware('permission:devolucion.nueva');
    Route::get('devolucion/factura/{id}', 'Api\DevolucionController@imprimirDevolucion')->middleware('permission:devolucion.nueva');
    Route::post('devolucion/eliminar_devolucion', 'Api\DevolucionController@destroyDevolucion')->middleware('permission:devolucion.nueva');



    //Backup DB
    Route::get('respaldos', 'Api\DataBaseController@index')->middleware('permission:base_datos.index');
    Route::post('respaldos/backup', 'Api\DataBaseController@backup')->middleware('permission:base_datos.backup');
    Route::post('respaldos/restore', 'Api\DataBaseController@restore')->middleware('permission:base_datos.restore');
    Route::post('respaldos/delete', 'Api\DataBaseController@destroy')->middleware('permission:base_datos.delete');
});

//Reportes
Route::get('reportes', 'Api\ReportesController@index')->middleware('permission:reportes.index');
Route::post('reporte/validar_reporte', 'Api\ReportesController@validateReporte')->middleware('permission:reportes.index');
Route::post('reporte/validar_reporte_proveedor', 'Api\ReportesController@validateReporteProveedor')->middleware('permission:reportes.index');
Route::post('reporte/validar_reporte_producto', 'Api\ReportesController@validateReporteProducto')->middleware('permission:reportes.index');
Route::post('reporte/inventario_producto', 'Api\ReportesController@reporteInventarioProducto')->middleware('permission:reportes.inventario_producto');
Route::post('reporte/salida_producto', 'Api\ReportesController@reporteSalidaProducto')->middleware('permission:reportes.salida_producto');
Route::post('reporte/entrada_producto', 'Api\ReportesController@reporteEntradaProducto')->middleware('permission:reportes.entrada_producto');
Route::post('reporte/devoluciones', 'Api\ReportesController@reporteDevoluciones')->middleware('permission:reportes.devoluciones');
Route::post('reporte/cierre_cajas', 'Api\ReportesController@reporteCierreCajas')->middleware('permission:reportes.cierre_cajas');
Route::post('reporte/ventas', 'Api\ReportesController@reporteVentasProductos')->middleware('permission:reportes.ventas');
Route::post('reporte/pago_proveedores_por_proveedor', 'Api\ReportesController@reportePagoProveedorPorProveedor')->middleware('permission:reportes.pago_proveedores_proveedor');
Route::post('reporte/pago_proveedores', 'Api\ReportesController@reportePagoProveedores')->middleware('permission:reportes.pago_proveedores');
Route::post('reporte/movimiento_caja', 'Api\ReportesController@reporteMovimientoCaja')->middleware('permission:reportes.entrada_efectivo');;


//Cierre Cajas
Route::post('cierre/nuevo', 'Api\ProcesoCajaController@storeCierre')->middleware('permission:cierre');;

//Entrada Efectivo
Route::get('movimiento_caja/nuevo', 'Api\MovimientoCajaController@create')->middleware('permission:movimiento_caja.create');
Route::post('movimiento_caja/nuevo', 'Api\MovimientoCajaController@store')->middleware('permission:movimiento_caja.create');


Route::get('bitacora', 'Api\BitacoraController@index')->middleware('permission:bitacora.index');
Route::post('bitacora/descargar', 'Api\BitacoraController@descargarBitacora')->middleware('permission:bitacora.descargar');
Route::post('bitacora/eliminar', 'Api\BitacoraController@eliminarBitacora')->middleware('permission:bitacora.delete');
Route::post('bitacora/validar', 'Api\BitacoraController@validarBitacora')->middleware('permission:bitacora.index');

Route::post('manual_usuario/descargar', 'Api\DashboardController@descargarManual');
