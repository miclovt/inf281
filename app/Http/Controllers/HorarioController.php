<?php

namespace App\Http\Controllers;

use App\Horario;
use Illuminate\Http\Request;

class HorarioController extends Controller
{
    public function index(){
        $Horarios=Horario::all();
        return $Horarios->toJson();
    }public function addHorario(Request $request){
        $validatedata=$request->validate([
            'Horario'=>'required',
        ]);
        $horario=Horario::create([
            'Horario'=>$validatedata['Horario']
        ]);
        return response()->json();
    }

   
    
}
