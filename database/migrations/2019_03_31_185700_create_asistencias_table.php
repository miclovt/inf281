<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Carbon\Carbon;

class CreateAsistenciasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('asistencia', function (Blueprint $table) {
            $table->unsignedInteger('CI');
            $table->date('Fecha')->default(Carbon::now()->toDateString());
            $table->primary(array('CI','Fecha'));
            $table->boolean('Asistio')->default(0);
            //$table->foreign('CI')->references('CI')->on('soldado');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('asistencias');
    }
}
