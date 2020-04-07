<?php

use Illuminate\Database\Seeder;

class TipoPermisosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tipo = new \App\TipoPermiso([
            'id'=>1,
            'nombre' => 'Mantenimientos',
        ]);
        $tipo->save();

        $tipo = new \App\TipoPermiso([
            'id'=>2,
            'nombre' => 'Procesos',
        ]);
        $tipo->save();

        $tipo = new \App\TipoPermiso([
            'id'=>3,
            'nombre' => 'Seguridad',
        ]);
        $tipo->save();

        $tipo = new \App\TipoPermiso([
            'id'=>4,
            'nombre' => 'Reportes',
        ]);
        $tipo->save();

        $tipo = new \App\TipoPermiso([
            'id'=>5,
            'nombre' => 'Otros',
        ]);
        $tipo->save();
    }
}