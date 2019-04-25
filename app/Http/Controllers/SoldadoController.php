<?php

namespace App\Http\Controllers;

use App\Soldado;
use Illuminate\Support\Facades\DB;
use App\Postulante;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Http\Controllers\AsistenciaController;

class SoldadoController extends Controller
{
    public function index(){
        $Soldados=Soldado::all();
        return $Soldados->toJson();
    }
    public function addSoldadoCI($CI){
        $idcuartel=Postulante::where('CI',$CI)->get()->first()->IdCuartel;
        $persona=Soldado::create([
            'CI'=>$CI,
            'ContraSoldado'=>'',
            'IdCuartel'=>$idcuartel,
        ]);
        return response()->json();
    }public function addSoldadoRegistro(Request $request){
        $validatedata=$request->validate([
            'CI'=>'required',
            'ContraSoldado'=>'required',
            'NomPadre'=>'required',
            'NomMadre'=>'required',
        ]);
        
        $soldado=Soldado::where('CI',$validatedata['CI'])->update([
            'ContraSoldado'=>$validatedata['ContraSoldado'],
            'NomPadre'=>$validatedata['NomPadre'],
            'NomMadre'=>$validatedata['NomMadre']
        ]);
        return response()->json();
    }public function updateparalibreta(Request $request){
        $validatedata=$request->validate([
            'CiSoldado'=>'required',
            'Ojos'=>'required',
            'Labios'=>'required',
            'Piel'=>'required',
            'Peso'=>'required',
            'Altura'=>'required',
            'Nariz'=>'required',
        ]);
        $soldado=Soldado::where('CI',$validatedata['CiSoldado'])->update([
            'Ojos'=>$validatedata['Ojos'],
            'Labios'=>$validatedata['Labios'],
            'Piel'=>$validatedata['Piel'],
            'Peso'=>$validatedata['Peso'],
            'Altura'=>$validatedata['Altura'],
            'Nariz'=>$validatedata['Nariz'],
            'Estado'=>1,
        ]);
        return response()->json();
    }
    public function getallsincompa($idcuartel){
        $data=DB::select('select p.CI CI, p.Nombre Nombre ,p.ApPaterno ApPaterno,p.ApMaterno ApMaterno from persona p,soldado s where p.CI=s.CI and s.Estado=0 and s.IdCuartel= ? and s.IdCompania=0', [$idcuartel]);
        return json_encode($data);
    }public function updatecompania (Request $request){
        $ci=$request->get('CI');
        $idcompania=$request->get('IdCompania');
        $soldado=Soldado::where('CI',$ci)->update([
            'IdCompania'=>$idcompania
        ]);
        return response()->json();
    }public function getdatawithasis($idcuartel,$idcompania){
        $hoy=Carbon::now()->utcoffset(-240)->toDateString();
        $allsoldados=Soldado::where('IdCuartel',$idcuartel)->where('IdCompania',$idcompania)->get();
        $contro=new AsistenciaController;
        for ($i=0; $i <sizeof($allsoldados) ; $i++) { 
            $contro->existefecha($hoy,$allsoldados[$i]['CI']);
        }$data=DB::select('select p.CI,p.Nombre,p.ApPaterno,p.ApMaterno,s.Tarea,a.Fecha,a.Asistio,s.Grado from persona p, soldado s, asistencia a where p.CI=s.CI and s.CI=a.CI and s.Estado=0 and s.IdCuartel= ? and s.IdCompania= ? and a.Fecha= ?', [$idcuartel,$idcompania,$hoy]);
        return json_encode($data);
    }public function updatetarea (Request $request){
        $ci=$request->get('CI');
        $Tarea=$request->get('Tarea');
        $soldado=Soldado::where('CI',$ci)->update([
            'Tarea'=>$Tarea
        ]);
    }
    public function updategrado (Request $request){
        $ci=$request->get('CI');
        $Grado=$request->get('Grado');
        $soldado=Soldado::where('CI',$ci)->update([
            'Grado'=>$Grado
        ]);
    }
}
