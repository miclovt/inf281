<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Postulante extends Model
{
    protected $table = 'postulante';
    public $timestamps=false;
    protected $fillable=['CI', 'Habilitado', 'IdCuartel','IdHorario','IdDia'];

    public function cuartel(){
        return $this->hasOne('App\Cuartel');
    }public function horario(){
        return $this->hasOne('App\Horario');
    }public function dia(){
        return $this->hasOne('App\Dia');
    }
}