<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Horario extends Model
{
    protected $table = 'horario';
    public $timestamps=false;
    protected $fillable=['IdHorario', 'Horario'];
    public function cuarxdia(){
        return $this->hasMany('App\CuarxHora');
    }
    public function postulante(){
        return $this->hasMany('App\Postulante');
    }
}
