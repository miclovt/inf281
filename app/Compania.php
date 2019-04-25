<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Compania extends Model
{
    protected $table = 'compania';
    public $timestamps=false;
    protected $fillable=['IdCompania', 'NomCompania','Genero','TieneI','IdCuartel'];
}
