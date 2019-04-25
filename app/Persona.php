<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    protected $table = 'persona';
    public $timestamps=false;
    protected $fillable=['CI','ApPaterno','ApMaterno','Nombre','Correo','Genero','FechaNac','Departamento','Provincia','Direccion','Idioma','TipoSangre'];
}
