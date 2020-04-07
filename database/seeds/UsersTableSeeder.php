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
            'name' => 'José Andres',
            'email' =>'a@gmail.com',
            'password'=> bcrypt('123456'),
          ]);

        $user->save();
        $user->roles()->sync(1);

        $user = new \App\User([
            'name' => 'Juan Pablo',
            'email' => 'j@gmail.com',
            'password' => bcrypt('123456'),
          ]);

        $user->save();
        $user->roles()->sync(2);


    }
}