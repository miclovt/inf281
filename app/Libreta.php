<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Libreta extends Model
{
    protected $table = 'libreta';
    public $timestamps=false;
    protected $fillable=['NroMatricula', 'Serie', 'Fecha', 'Foto', 'CiInstructor', 'CiSoldado'];
    public function soldado(){
        return $this->hasOne('App\Soldado');
    }
}
