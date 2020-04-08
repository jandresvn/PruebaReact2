<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new \App\User([
            'nombre' => 'Andrés',
            'apellidos' => 'Vega Núñez',
            'email' => 'a@gmail.com',
            'password' => bcrypt('admin'),
            'estado' => 1
        ]);

        $user->save();
        $user->roles()->sync(1);

        $user = new \App\User([
            'nombre' => 'Juan Pablo',
            'apellidos' => 'Morales Rodriguez',
            'email' => 'j@gmail.com',
            'password' => bcrypt('123456'),
            'estado' => 1
        ]);

        $user->save();
        $user->roles()->sync(2);


    }
}
