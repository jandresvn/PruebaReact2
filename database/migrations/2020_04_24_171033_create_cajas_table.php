<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCajasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cajas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('numero_caja')->unique();
            $table->tinyInteger('estado');
            $table->unsignedInteger('usuario_crea');
            $table->unsignedInteger('usuario_edita');
            $table->foreign('usuario_crea')->
            references('id')->
            on('users');
            $table->foreign('usuario_edita')->
            references('id')->
            on('users');
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
        Schema::table('cajas', function (Blueprint $table) {
            $table->dropForeign('cajas_usuario_crea_foreign');
            $table->dropColumn('usuario_crea');

            $table->dropForeign('cajas_usuario_edita_foreign');
            $table->dropColumn('usuario_edita');

            $table->drop();
        });
    }
}
