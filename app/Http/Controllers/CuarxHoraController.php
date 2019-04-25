<?php

namespace App\Http\Controllers;

use App\CuarxHora;
use App\Http\Controllers\HorarioController;
use App\Http\Controllers\DiaController;
use Illuminate\Http\Request;

class CuarxHoraController extends Controller
{
    public function index(){
        $cuarxhoras=CuarxHora::all();
        return $cuarxhoras->toJson();
    }
    public function addcuar($IDCuartel){
        $dias= new DiaController;
        $dias=json_decode($dias->index(),true);
        $horarios= new HorarioController;
        $horarios=json_decode($horarios->index(),true);
        foreach($dias as $dia){
            foreach($horarios as $horario){
                $cuarxhora=CuarxHora::create([
                    'IdDia'=>$dia['IdDia'],
                    'IdHorario'=>$horario['IdHorario'],
                    'IdCuartel'=>$IDCuartel
                ]);
            }   
        }return response()->json();
    }
    public function tothorarios($IDCuartel){
        return CuarxHora::where('IdCuartel',$IDCuartel)->get()->count();
    }
    public function getnoLleno($IDCuartel){
        return CuarxHora::where('Lleno',0)->where('IdCuartel',$IDCuartel)->first();
    }
    public function setlleno($IDCuartel,$IdDia,$IdHorario){
        CuarxHora::where('IdCuartel',$IDCuartel)->where('IdDia',$IdDia)->where('IdHorario',$IdHorario)->update(['Lleno'=>1]);
        return response()->json();
    }
    public function setnolleno($IDCuartel,$IdDia,$IdHorario){
        CuarxHora::where('IdCuartel',$IDCuartel)->where('IdDia',$IdDia)->where('IdHorario',$IdHorario)->update(array('Lleno'=>0));
        return response()->json();
    }
}
