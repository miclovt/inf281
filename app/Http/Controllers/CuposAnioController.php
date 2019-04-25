<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use App\CuposAnio;
use Illuminate\Http\Request;

class CuposAnioController extends Controller
{
    public function index(){
        $CuposAnio=CuposAnio::all();
        return $CuposAnio->toJson();
    }
    public function addCupoAnio(Request $request){
        $validatedata=$request->validate([
            
            'CuposHombre'=>'required',
            'CuposMujer'=>'required',
            'IdCuartel'=>'required'
        ]);    
        $cuposanio=CuposAnio::create([
            'Anio'=>Carbon::now()->year,
            'CuposHombre'=>$validatedata['CuposHombre'],
            'CuposMujer'=>$validatedata['CuposMujer'],
            'IdCuartel'=>$validatedata['IdCuartel']
        ]);  
        return response()->json(); 
    }public function cuposMujeres($IdCuartel,$anio){
        $cantidadmujeres=CuposAnio::where('Anio',$anio)->where('IdCuartel',$IdCuartel)->first()->CuposMujer;
        return $cantidadmujeres;
    }public function cuposHombres($IdCuartel,$anio){
        $cantidadhombre=CuposAnio::where('Anio',$anio)->where('IdCuartel',$IdCuartel)->first()->CuposHombre;
        return $cantidadhombre;
    }public function getactualdata($IdCuartel){
        $anio=Carbon::now()->year;
        if(CuposAnio::where('Anio',$anio)->where('IdCuartel',$IdCuartel)->first()!=null){
            return json_encode(CuposAnio::select('CuposHombre','CuposMujer')->where('Anio',$anio)->where('IdCuartel',$IdCuartel)->first());
        }return json_encode(['CuposHombre'=>0,'CuposMujer'=>0]);
    }public function actualizaroañadir(Request $request){
        $IdCuartel=$request->get('IdCuartel');
        if(CuposAnio::where('IdCuartel',$IdCuartel)->where('Anio',Carbon::now()->year)->first()==null){
           addCupoAnio($request);
        }else{
            CuposAnio::where('IdCuartel',$IdCuartel)->where('Anio',Carbon::now()->year)->update([
                'CuposHombre'=>$request->get('CuposHombre'),
                'CuposMujer'=>$request->get('CuposMujer'),
            ]);
        }//header('location:http://localhost:8000/cuarteles');
        echo "<script type='text/javascript'>window.location='http://localhost:8000/cuarteles'; </script>";
    }
}
