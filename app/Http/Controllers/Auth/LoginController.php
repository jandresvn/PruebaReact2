<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    //use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        $this->validate(request(), [
            'email' => 'email|required|string',
            'password' => 'required|string'
        ]);
        $credentials = array('email' => $request->input('email'), 'password' => $request->input('password'));

        if (Auth::attempt($credentials)) {
            return Auth::user();
        } else {
            throw ValidationException::withMessages([
                'email' => ['El usuario o contraseña son invalidos'],
            ]);
        };
    }

    public function logout()
    {
        Auth::logout();
        return 'Sesion cerrada';
    }
}
