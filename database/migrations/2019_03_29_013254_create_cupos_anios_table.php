<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Carbon\Carbon;

class CreateCuposAniosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cuposanio', function (Blueprint $table) {
            $table->unsignedInteger('Anio')->default(Carbon::now()->year);
            $table->unsignedInteger('IdCuartel');
            $table->primary(array('Anio','IdCuartel'));
            $table->unsignedInteger('CuposHombre');
            $table->unsignedInteger('CuposMujer');
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
        Schema::dropIfExists('cuposanio');
    }
}
