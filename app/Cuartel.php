<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cuartel extends Model
{
    protected $table = 'cuartel';
    public $timestamps=false;
    protected $fillable=['IdCuartel', 'Nombre', 'Arma', 'Departamento', 'Direccion', 'Tipo'];
    
    public function compania(){
        return $this->hasMany('App\Compania');
    }
    public function cuposanio(){
        return $this->hasMany('App\CuposAnio');
    }public function cuarxhora(){
        return $this->hasMany('App\CuarxHora');
    }
}
