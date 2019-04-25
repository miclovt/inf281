<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Libreta;
use App\Http\Controllers\AsistenciaController;
use App\Http\Controllers\InstructorController;

class LibretaController extends Controller
{
    public function addlibreta(Request $request){
        $validatedata=$request->validate([
            'CiInstructor'=>'required',
            'CiSoldado'=>'required',
            'Serie'=>'required',
            'Ojos'=>'required',
            'Labios'=>'required',
            'Piel'=>'required',
            'Altura'=>'required',
            'Peso'=>'required',
            'Nariz'=>'required'
        ]);
        if($request->hasfile('Foto'))
         {
                
                $name=$request->file('Foto')->getClientOriginalName();
                $request->file('Foto')->move(public_path().'/images/', $name);    
                $Libreta=Libreta::create([
                    'CiInstructor'=>$validatedata['CiInstructor'],
                    'CiSoldado'=>$validatedata['CiSoldado'],
                    'Serie'=>$validatedata['Serie'],
                    'Fecha'=>Carbon::now()->utcoffset(-240)->toDateString(),
                    'Foto'=>$request->file('Foto')->getClientOriginalName(),
                ]);
         }$soldado=new SoldadoController;
         $soldado->updateparalibreta($request);
         $instru=new InstructorController;
         $url=$instru->getcuarcomp($request->get('CI'));
         header('location:http://localhost:8000/instru/listasis/'.$url);

    }
    public function getdataci($ci){
        $data=DB::select('select p.*,s.*,cu.Nombre NomCuartel,co.NomCompania from persona p,soldado s,cuartel cu,compania co where p.CI=s.CI and s.IdCuartel=cu.IdCuartel and s.IdCompania=co.IdCompania and  s.CI= ?', [$ci]);
        return json_encode($data);
    }public function getdataparaformlibreta($ci){
        $data=DB::select('select p.Nombre,p.ApPaterno,p.ApMaterno,p.CI from persona p,soldado s  where s.CI = p.CI and s.CI=?', [$ci]);
        return json_encode($data);
    } 
}

