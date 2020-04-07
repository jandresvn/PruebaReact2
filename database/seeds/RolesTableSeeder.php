<?php

use Illuminate\Database\Seeder;
use Caffeinated\Shinobi\Models\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create([
            'name'        => 'Administrador',
            'slug'        => 'admin',
            'description' => 'Administrador',
           'special'     => 'all-access'
          ]);

          Role::create([
            'name'        => 'Asistente',
            'slug'        => 'asistente',
            'description' => 'Asistente',
        //    'special'     => 'no-access'
          ]);

    }
}
