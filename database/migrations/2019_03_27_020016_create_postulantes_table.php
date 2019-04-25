<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostulantesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('postulante', function (Blueprint $table) {
            $table->unsignedInteger('CI');
            $table->primary('CI');
            $table->boolean('Habilitado')->default(0);
            $table->unsignedInteger('IdCuartel');
            $table->unsignedInteger('IdHorario');
            $table->unsignedInteger('IdDia');
            $table->foreign('IdCuartel')->references('IdCuartel')->on('cuartel');
            $table->foreign('IdHorario')->references('IdHorario')->on('horario');
            $table->foreign('IdDia')->references('IdDia')->on('dia');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('postulante');
    }
}









