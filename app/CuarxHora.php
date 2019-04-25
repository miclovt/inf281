<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CuarxHora extends Model
{
    protected $table='cuarxhora';
    public $timestamps=false;
    protected $fillable=['IdDia','IdHorario','IdCuartel','Lleno'];
}
