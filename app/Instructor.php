<?php

namespace App;
use Illuminate\Notifications\Notifiable;
//use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticable;
class Instructor extends Authenticable
{
    use Notifiable;
    protected $table = 'instructor';
    public $timestamps=false;
    protected $fillable=['CI', 'ContraInstructor', 'CodInstructor', 'Grado', 'Arma','Admin','IdCuartel', 'IdCompania'];
    public function compania(){
        return $this->hasOne('App\Compania');
    }
    public function libreta(){
        return $this->hasMany('App\Libreta');
    }public function getAuthPassword()
    {
        return $this->ContraInstructor;
    }
}
