<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProveedoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proveedores', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre_proveedor', 80);
            $table->string('nombre_encargado', 80);
            $table->string('email', 50);
            $table->string('telefono', 8);
            $table->tinyInteger('estado');
            $table->unsignedInteger('usuario_crea');
            $table->unsignedInteger('usuario_edita');
            $table->foreign('usuario_crea')->references('id')->on('users');
            $table->foreign('usuario_edita')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('proveedores', function(Blueprint $table){
            $table->dropForeign('proveedores_usuario_crea_foreign');
            $table->dropColumn('usuario_crea');

            $table->dropForeign('proveedores_usuario_edita_foreign');
            $table->dropColumn('usuario_edita');

            $table->drop();

        });
    }
}
