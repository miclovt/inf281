<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCuarxHorasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cuarxhora', function (Blueprint $table) {
            $table->unsignedInteger('IdDia');
            $table->unsignedInteger('IdHorario');
            $table->unsignedInteger('IdCuartel');
            $table->boolean('Lleno')->default(0);
            $table->foreign('IdDia')->references('IdDia')->on('dia');
            $table->foreign('IdHorario')->references('IdHorario')->on('horario');
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
        Schema::dropIfExists('cuarx_horas');
    }
}
