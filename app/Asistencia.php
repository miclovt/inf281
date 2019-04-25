<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Asistencia extends Model
{
    protected $fillable=['CI','Fecha',  'Asistio'];
    protected $table = 'asistencia';
    public $timestamps=false;
}
