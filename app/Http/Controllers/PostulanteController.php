<?php

namespace App\Http\Controllers;

use App\Postulante;
use App\Persona;
use App\Cuartel;
use App\Dia;
use App\Horario;
use App\Http\Controllers\SoldadoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class PostulanteController extends Controller
{
    public function index(){
        $Postulantes=Postulante::all();
        return $Postulantes->toJson();
    }
    public function addDataPostulante(Request $request){
        $validatedata=$request->validate([
            'CI'=>'required',
            'IdCuartel'=>'required',
            'IdHorario'=>'required',
            'IdDia'=>'required'
        ]);
        $postulante=Postulante::create([
            'CI'=>$validatedata['CI'],
            'IdCuartel'=>$validatedata['IdCuartel'],
            'IdHorario'=>$validatedata['IdHorario'],
            'IdDia'=>$validatedata['IdDia']
        ]);
        return response()->json();
    }
    public function eliminaPostulante($ci){
        if(Postulante::where('CI',$ci)->count()!=0){
            $Postulante=Postulante::where('CI',$ci)->delete();
            return true;
        }else{
            return false;
        }
    }
    public function habilitarPostulante($ci){
        $Postulante=Postulante::where('CI',$ci)->update(['Habilitado'=>1]);
        $soldado=new SoldadoController;
        $soldado->addSoldadoCI($ci);
        return response()->json();
    }
    public function totPostulantesencuartelxdegeneroy($ID,$genero){
        return DB::select('select count(*) tot from persona Per,postulante Pos where Pos.CI=Per.CI and Per.genero= ? and Pos.IdCuartel= ?',[$genero,$ID])[0]->tot; 
       
    }public function listaPostxCuartel($ID){
        return Postulante::where('IdCuartel',$ID)->get();
    }public function totenhorarioycuartelx($IDCuartel,$IdDia,$IdHorario){
        return Postulante::where('IdCuartel',$IDCuartel)->where('IdDia',$IdDia)->where('IdHorario',$IdHorario)->get()->count();
    }public function noexistereserva($CI){
        if(Postulante::where('CI',$CI)->count()==0){
            return true;
        }return false;
    }public function getdataci($ci){
        $Ids= Postulante::select('IdCuartel','IdDia','IdHorario')->where('CI',$ci)->first();
        $datPer=Persona::select('CI','Nombre','ApPaterno','ApMaterno')->where('CI',$ci)->first();
        $Nom=$datPer->Nombre;
        $ApPat=$datPer->ApPaterno;
        $ApMat=$datPer->ApMaterno;
        $NomCuartel=Cuartel::select('Nombre')->where('IdCuartel',$Ids->IdCuartel)->first()->Nombre;
        $Dia=Dia::select('Fecha')->where('IdDia',$Ids->IdDia)->first()->Fecha;
        $Horario=Horario::select('Horario')->where('IdHorario',$Ids->IdHorario)->first()->Horario;
        $data=['CI'=>$ci,'Nombre'=>$Nom,'App'=>$ApPat,'Apm'=>$ApMat,'Cu'=>$NomCuartel,'Fecha'=>$Dia,'Hora'=>$Horario];
        return $data;
    }public function allpostudelcuartelx($idcuartel){
        $data= DB::select('select p.CI ci,d.Fecha dia,h.Horario hora from postulante p,dia d,horario h where d.IdDia= p.IdDia and p.IdHorario=h.IdHorario and p.Habilitado=0 and p.IdCuartel= ?', [$idcuartel]);
        return json_encode($data);
    }
    
}
