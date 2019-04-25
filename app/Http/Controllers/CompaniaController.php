<?php

namespace App\Http\Controllers;

use App\Compania;
use Illuminate\Http\Request;

class CompaniaController extends Controller
{
    public function index(){
        $Companias=Compania::all();
        return $Companias->toJson();
    }
    public function addCompania(Request $request){
        $validatedata=$request->validate([
            'NomCompania'=>'required',
            'Genero'=>'required',
            'IdCuartel'=>'required'
        ]);
        $compania=Compania::create([
            'NomCompania'=>$validatedata['NomCompania'],
            'Genero'=>$validatedata['Genero'],
            'IdCuartel'=>$validatedata['IdCuartel']
        ]);
        return response()->json();
    }public function getCompaniaSinInstru($IdCuartel){
        return Compania::select('IdCompania')->where('IdCuartel',$IdCuartel)->where('TieneI',0)->get()->first();
    }public function setTieneI($IdCompania){
        $compania=Compania::where('IdCompania',$IdCompania)->update([
            'TieneI'=>1
        ]);
        return response()->json();
    }public function getcompaniasxcuartel($IdCuartel){
        $data=Compania::where('IdCuartel',$IdCuartel)->get();
        return $data->toJson();
    }
}
