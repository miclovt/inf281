<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCuartelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cuartel', function (Blueprint $table) {
            $table->increments('IdCuartel');
            $table->string('Nombre');
            $table->string('Arma');
            $table->string('Departamento');
            $table->string('Direccion');
            $table->string('Tipo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cuartel');
    }
}
