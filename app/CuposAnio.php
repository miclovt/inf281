<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CuposAnio extends Model
{
    protected $table='cuposanio';
    public $timestamps=false;
    protected $fillable=['Anio','CuposHombre','CuposMujer','IdCuartel'];
}
