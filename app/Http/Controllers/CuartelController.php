<?php

namespace App\Http\Controllers;
use App\Cuartel;
use Illuminate\Http\Request;
use App\Http\Controllers\CuarxHoraController;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CuartelController extends Controller
{
    public function index(){
        $Cuarteles=Cuartel::where('IdCuartel','>',1)->get();
        return json_encode($Cuarteles);
    }
    public function addCuartel(Request $request){
        $validatedata=$request->validate([
            'Nombre'=>'required',
            'Arma'=>'required',
            'Departamento'=>'required',
            'Direccion'=>'required',
            'Tipo'=>'required', 
        ]);
        $cuartel=Cuartel::create([
            'Nombre'=>$validatedata['Nombre'],
            'Arma'=>$validatedata['Arma'],
            'Departamento'=>$validatedata['Departamento'],
            'Direccion'=>$validatedata['Direccion'],
            'Tipo'=>$validatedata['Tipo'],
        ]);
        $cuarxhora=new CuarxHoraController;
        $cuarxhora->addcuar(json_decode($this->Cuartelesxdepnom($validatedata['Departamento'],$validatedata['Nombre']),true)[0]['IdCuartel']);
        return response()->json();
    }public function Cuartelesxdep($depa){
        $anio=Carbon::now()->year;
        $cuarteles1=DB::select('select c.Nombre from cuartel c,cuposanio ca where ca.IdCuartel=c.IdCuartel and c.Departamento= ? and (select count(*) from postulante p where p.IdCuartel=c.IdCuartel)<ca.CuposHombre+ca.CuposMujer and ca.Anio = ? ', [$depa,$anio]);
        //$Cuarteles=Cuartel::select('Nombre')->where('Departamento',$depa)->orderBy('Nombre')->get();
        return json_encode($cuarteles1);
    }public function Cuartelesxdepnom($depa,$nombre){
        $Cuartel=Cuartel::select('IdCuartel')->where('Departamento',$depa)->where('Nombre',$nombre)->get();
        return $Cuartel->toJson();
    }public function getnombre($id){
        return Cuartel::where('IdCuartel',$id)->get()->first()->Nombre;
    }
}
