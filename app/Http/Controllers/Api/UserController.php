<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use Caffeinated\Shinobi\Models\Role;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Query\Builder;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
       $users = User::with('roles')->orderBy($request->column??'name', $request->order??'asc')->paginate($request->per_page?? 10);

        return $users;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles= Role::whereNotIn('id',[1])->get();

        return $roles;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name'    =>'required|string|max:80',
            'email'     =>'required|string|unique:users|max:100',
            'password'  =>'required|string|max:80|min:6',
            'rol'      => 'required|exists:roles,id',
        ]);

        $usuario = new User([
            'name'    =>$request->input('nombre'),
            'email'     =>$request->input('email'),
            'password'=>bcrypt($request->input('password')),
        ]);
        $usuario->save();
        $usuario->roles()->sync($request->input('rol'));



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
        $usuario = User::with('roles')->find($id);


        if(isset($usuario)&&!empty($usuario)&&$usuario->roles->first()->id!=1){
            $roles= Role::whereNotIn('id',[1])->get();
            return ['usuario'=> $usuario, 'roles'=>  $roles];
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
        $usuario = User::find($id);

        $this->validate($request, [
            'name'    =>'required|string|max:80',
            'email'     =>'required|string|max:100|unique:users,email,'.$usuario->id,
            'rol'      => 'required|exists:roles,id',]);

        $usuario->nombre= $request->nombre;
        $usuario->email= $request->email;
        $usuario->save();
        $usuario->roles()->sync($request->rol);


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

    public function updatePassword(Request $request)
    {

        $user = Auth::user();
        $credentials = array('email' =>$user->email ,'password' => $request->input('password_actual'));


        $this->validate($request, [
            'password_actual'=>'required|string',
            'password'  =>'required|string|max:80|min:6',
            'password_confirmation'  =>'required|same:password|string|max:80|min:6',

        ]);

        if( !(Auth::attempt($credentials)) ) {

            throw ValidationException::withMessages([
                'password_actual' => ['La contraseña actual es inválida'],
            ]);
        }

        $usuario= User::find($request->id);
        $usuario->password= bcrypt($request->password);
        $usuario->save();

    }

    public function editPassword()
    {
        //Carga el editar contrasena
    }
}