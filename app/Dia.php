<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dia extends Model
{
    protected $table='dia';
    public $timestamps=false;
    protected $fillable=['IdDia', 'Fecha'];
    public function cuarxdia(){
        return $this->hasMany('App\CuarxHora');
    }
    public function postulante(){
        return $this->hasMany('App\Postulante');
    }
}
