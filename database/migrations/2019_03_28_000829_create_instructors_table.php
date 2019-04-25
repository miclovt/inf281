<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInstructorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instructor', function (Blueprint $table) {
            $table->unsignedInteger('CI');
            $table->primary('CI');
            $table->string('ContraInstructor')->default('');
            $table->unsignedInteger('CodInstructor');
            $table->string('Grado')->default('');
            $table->string('Arma')->default('');
            $table->boolean('Admin')->default(0);
            $table->unsignedInteger('IdCuartel');
            $table->foreign('IdCuartel')->references('IdCuartel')->on('compania');
            $table->unsignedInteger('IdCompania');
            $table->foreign('IdCompania')->references('IdCompania')->on('compania');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('instructors');
    }
}
