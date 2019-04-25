<?php

namespace App\Http\Controllers;
use App\Dia;
use App\CuarxHora;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DiaController extends Controller
{
    public function index(){
        $Dias=Dia::all();
        return $Dias->toJson();
    }public function actuDia(Request $request){
        $validatedata=$request->validate([
            'Fecha'=>'required',
        ]);
        $dia1=Carbon::create($validatedata['Fecha']);
        for ($i=1; $i <=15 ; $i++) { 
            $dia=Dia::where('IdDia',$i)->update(array('Fecha' => $dia1->isoFormat('DD-MM-YYYY') ));
            if($i%5==0){
                $dia1->add(2,'day');    
            }
            $dia1->add(1,'day');
        }CuarxHora::where('Lleno',1)->update(array('Lleno'=>0));
        return response()->json();
    }

}
