<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>AyM Store</title>
        <!-- Tell the browser to be responsive to screen width -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="{{ asset('plugins/fontawesome-free/css/all.min.css') }}">
        <!-- Ionicons -->
        <link rel="stylesheet" type="text/css" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="{{ asset('dist/css/adminlte.min.css') }}">
        <link rel="stylesheet" href="{{ asset('plugins/overlayScrollbars/css/OverlayScrollbars.min.css') }}">
        <!-- Google Font: Source Sans Pro -->
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
    </head>
    <body class="hold-transition sidebar-mini layout-fixed">

        <div id="index"></div>

        <script>
            window.App = {
            appURL: 'http://127.0.0.1:8000/',
            loggedIn : false,
            user: [],
            tipo_user:'',
            @auth
                loggedIn:true,
                user: @json(auth()->user()),
                tipo_user: @json(auth()->user()->roles->first()->name),
            @endauth


                    //Venta
                    can_venta_nueva:false,
                    @can('venta.nueva')
                        can_venta_nueva:true,
                    @endcan

                    //Inventario
                    can_inventario_index:false,
                    @can('inventario.index')
                        can_inventario_index:true,
                    @endcan
                    can_inventario_entrada:false,
                    @can('inventario.entrada')
                        can_inventario_entrada:true,
                    @endcan
                    can_inventario_salida:false,
                    @can('inventario.salida')
                        can_inventario_salida:true,
                    @endcan

                    //Pedido
                    can_pedido_index:false,
                    @can('pedidos.index')
                        can_pedido_index:true,
                    @endcan
                    can_pedido_create:false,
                    @can('pedidos.create')
                        can_pedido_create:true,
                    @endcan
                    can_pedido_edit_estado:false,
                    @can('pedidos.edit_estado')
                        can_pedido_edit_estado:true,
                    @endcan

                    //Producto
                    can_producto_index:false,
                    @can('producto.index')
                        can_producto_index:true,
                    @endcan
                    can_producto_create:false,
                    @can('producto.create')
                        can_producto_create:true,
                    @endcan
                    can_producto_edit:false,
                    @can('producto.edit')
                        can_producto_edit:true,
                    @endcan
                    can_producto_show:false,
                    @can('producto.show')
                        can_producto_show:true,
                    @endcan

                     //Proveedor
                    can_proveedores_index:false,
                    @can('proveedor.index')
                        can_proveedores_index:true,
                    @endcan
                    can_proveedores_create:false,
                    @can('proveedor.create')
                        can_proveedores_create:true,
                    @endcan
                    can_proveedores_edit:false,
                    @can('proveedor.edit')
                        can_proveedores_edit:true,
                    @endcan

                    //Usuario
                    can_usuario_index: false,
                    @can('usuario.index')
                        can_usuario_index: true,
                    @endcan
                    can_usuario_create: false,
                    @can('usuario.create')
                        can_usuario_create: true,
                    @endcan
                    can_usuario_edit: false,
                    @can('usuario.edit')
                        can_usuario_edit: true,
                    @endcan

                    //Roles
                    can_role_index:false,
                    @can('role.index')
                        can_role_index:true,
                    @endcan
                    can_role_create:false,
                    @can('role.create')
                        can_role_create:true,
                    @endcan
                    can_role_edit_permisos:false,
                    @can('role.edit_permisos')
                        can_role_edit_permisos:true,
                    @endcan

                    //Cajas
                    can_caja_index: false,
                    @can('caja.index')
                        can_caja_index: true,
                    @endcan
                    can_caja_create: false,
                    @can('caja.create')
                        can_caja_create: true,
                    @endcan
                    can_caja_edit: false,
                    @can('caja.edit')
                        can_caja_edit: true,
                    @endcan

                    //Pago Proveedores
                    can_pago_proveedor: false,
                    @can('pago_proveedor.create')
                        can_pago_proveedor: true,
                    @endcan

                    //Movimiento Caja
                    can_movimiento_caja: false,
                    @can('movimiento_caja.create')
                    can_movimiento_caja: true,
                    @endcan

                    //Devoluciones
                    can_devolucion_nueva:false,
                    @can('devolucion.nueva')
                        can_devolucion_nueva:true,
                    @endcan

                    //Apertura y Cierre de Cajas
                    can_apertura:false,
                    @can('apertura')
                        can_apertura:true,
                    @endcan
                    can_cierre:false,
                    @can('cierre')
                        can_cierre:true,
                    @endcan

                    //Reportes
                    can_reportes_index:false,
                    @can('reportes.index')
                        can_reportes_index:true,
                    @endcan
                    can_reportes_inventario_producto:false,
                    @can('reportes.inventario_producto')
                        can_reportes_inventario_producto:true,
                    @endcan
                    can_reportes_salida_producto:false,
                    @can('reportes.salida_producto')
                        can_reportes_salida_producto:true,
                    @endcan
                    can_reportes_entrada_producto:false,
                    @can('reportes.entrada_producto')
                        can_reportes_entrada_producto:true,
                    @endcan
                    can_reportes_devoluciones:false,
                    @can('reportes.devoluciones')
                        can_reportes_devoluciones:true,
                    @endcan
                    can_reportes_cierre_cajas:false,
                    @can('reportes.cierre_cajas')
                        can_reportes_cierre_cajas:true,
                    @endcan
                    can_reportes_ventas:false,
                    @can('reportes.ventas')
                        can_reportes_ventas:true,
                    @endcan
                    can_reportes_pago_proveedores:false,
                    @can('reportes.pago_proveedores')
                        can_reportes_pago_proveedores:true,
                    @endcan
                    can_reportes_pago_proveedores_proveedor:false,
                    @can('reportes.pago_proveedores_proveedor')
                        can_reportes_pago_proveedores_proveedor:true,
                    @endcan
                    can_reportes_entrada_efectivo:false,
                    @can('reportes.entrada_efectivo')
                        can_reportes_entrada_efectivo:true,
                    @endcan

                    //Respaldos BD
                    can_base_datos_index:false,
                    @can('base_datos.index')
                        can_base_datos_index:true,
                    @endcan
                    can_base_datos_backup:false,
                    @can('base_datos.backup')
                        can_base_datos_backup:true,
                    @endcan
                    can_base_datos_restore:false,
                    @can('base_datos.restore')
                        can_base_datos_restore:true,
                    @endcan
                    can_base_datos_delete:false,
                    @can('base_datos.delete')
                        can_base_datos_delete:true,
                    @endcan

                    //Bitácora
                    can_bitacora_index:false,
                    @can('bitacora.index')
                        can_bitacora_index:true,
                    @endcan
                    can_bitacora_descargar:false,
                    @can('bitacora.descargar')
                        can_bitacora_descargar:true,
                    @endcan
                    can_bitacora_delete:false,
                    @can('bitacora.delete')
                        can_bitacora_delete:true,
                    @endcan
            }

        </script>

        {{-- <script src="{{ asset('plugins/jquery/jquery.min.js') }}"></script> --}}
        <script type="text/javascript" src="{{ asset('js/app.js') }} "></script>
        {{-- <script src="{{ asset('dist/js/demo.js') }}"></script> --}}
        <script src="{{ asset('plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js') }}"></script>
        <script src="{{ asset('plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
        <script src="{{ asset('dist/js/adminlte.js') }}"></script>
</body>
</html>
