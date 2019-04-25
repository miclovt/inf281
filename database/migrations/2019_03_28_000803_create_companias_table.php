<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compania', function (Blueprint $table) {
            $table->increments('IdCompania');
            $table->string('NomCompania');
            $table->boolean('Genero');
            $table->boolean('TieneI')->default(0);
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
        Schema::dropIfExists('companias');
    }
}
