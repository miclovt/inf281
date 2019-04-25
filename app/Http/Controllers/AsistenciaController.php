<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Asistencia;
class AsistenciaController extends Controller
{
    public function existefecha($hoy,$ci){
        if(Asistencia::where('Fecha',$hoy)->where('CI',$ci)->get()->count()==0){
            $asis=Asistencia::create([
                'CI'=>$ci,
                'Fecha'=>$hoy,
            ]);
        }
    }public function updateasis(Request $request){
        $ci=$request->get('CI');
        $Fecha=$request->get('Fecha');
        if(Asistencia::where('CI',$ci)->whereDate('Fecha',$Fecha)->first()->Asistio==0){
            $Asistencia=Asistencia::where('CI',$ci)->whereDate('Fecha',$Fecha)->where('Asistio',0)->update([
                'Asistio'=>1
            ]);
        }else{
            $Asistencia=Asistencia::where('CI',$ci)->whereDate('Fecha',$Fecha)->where('Asistio',1)->update([
                'Asistio'=>0
            ]);
        }
        
    }
}
