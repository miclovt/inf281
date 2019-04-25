<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSoldadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('soldado', function (Blueprint $table) {
            $table->unsignedInteger('CI');
            $table->string('ContraSoldado');
            $table->primary('CI');
            $table->boolean('Estado')->default(0);
            $table->string('Grado')->default('soldado raso');
            $table->string('NomPadre')->default('');
            $table->string('NomMadre')->default('');
            $table->integer('Altura')->default(0);
            $table->integer('Peso')->default(0);
            $table->string('Nariz')->default('');
            $table->string('Labios')->default('');
            $table->string('Piel')->default('');
            $table->string('Ojos')->default('');
            $table->string('Tarea')->default('');
            $table->unsignedInteger('IdCompania')->default(0);
            $table->unsignedInteger('IdCuartel');
            $table->foreign('IdCuartel')->references('IdCuartel')->on('cuartel');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('soldados');
    }
}
