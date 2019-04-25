<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Carbon\Carbon;

class CreateLibretasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('libreta', function (Blueprint $table) {
            $table->bigIncrements('NroMatricula');
            $table->string('Serie');
            $table->date('Fecha')->default(Carbon::now()->toDateString());
            $table->string('foto');
            $table->unsignedInteger('CiInstructor');
            $table->unsignedInteger('CiSoldado');
            $table->foreign('CiInstructor')->references('CI')->on('instructor');
            $table->foreign('CiSoldado')->references('CI')->on('soldado');        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('libretas');
    }
}
