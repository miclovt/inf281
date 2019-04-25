<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Soldado extends Model
{
    protected $fillable=['CI', 'ContraSoldado', 'NroMatricula', 'Estado', 'Grado', 'NomPadre', 'NomMadre', 'Altura', 'Peso', 'Nariz', 'Labios', 'Piel', 'Ojos', 'Tarea', 'IdCompania','IdCuartel'];
    protected $table = 'soldado';
    public $timestamps=false;
    public function asistencia(){
        return $this->hasMany('App\Asistencia');
    }
}
