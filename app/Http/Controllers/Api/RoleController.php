<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\DB;
use Caffeinated\Shinobi\Models\Role;
use Caffeinated\Shinobi\Models\Permission;
use App\TipoPermiso;


class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles= Role::whereNotIn('id',[1])->get();

        return $roles;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $permisos = TipoPermiso::with('permissions')->get();

        return $permisos;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, ['nombre'=>'required|string|max:80']);

        $role = Role::create([
            'name'        =>  $request->nombre,
            'slug'        =>  $request->nombre,
            'description' =>  $request->nombre,
        ]);

        $role->permissions()->sync($request->permisos);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $rol = Role::find($id);
        if(isset($rol)&&!empty($rol)){
            $permisosSeleccionados = DB::table('permission_role')->where('role_id', $id)->get();
            $permisos = TipoPermiso::with('permissions')->get();
            return ['permisos'=>$permisos,'permisosSeleccionados'=> $permisosSeleccionados, 'rol'=>$rol];
        }
        else{
             abort('409','El registro indicado es incorrecto');
        }


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $this->validate($request, ['nombre'=>'required|string|max:80']);

        $role= Role::find($id);

        $role->name = $request->input('nombre');
        $role->slug = $request->input('nombre');
        $role->description = $request->input('nombre');

        $role->save();

        $role->permissions()->sync($request->permisos);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
