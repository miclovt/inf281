<?php

namespace App\Http\Controllers;
use App\Persona;

//use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    public function index(){
        $Personas=Persona::all();
        return $Personas->toJson();
    }
    public function addPersonaHabilitada(Request $request){
        $validatedata=$request->validate([
            'FechaNac'=>'required',
            'Departamento'=>'required',
            'Provincia'=>'required',
            'Direccion'=>'required',
            'Idioma'=>'required',
            'TipoSangre'=>'required',
            'CI'=>'required'
        ]);
        $persona=Persona::where('CI',$validatedata['CI'])->update([
            'FechaNac'=>$validatedata['FechaNac'],
            'Departamento'=>$validatedata['Departamento'],
            'Provincia'=>$validatedata['Provincia'],
            'Direccion'=>$validatedata['Direccion'],
            'Idioma'=>$validatedata['Idioma'],
            'TipoSangre'=>$validatedata['TipoSangre'],
        ]);
        return response()->json();
    }
    public function addPersonaPost(Request $request){
        $validatedata=$request->validate([
            'CI'=>'required',
            'ApPaterno'=>'required',
            'ApMaterno'=>'required',
            'Nombre'=>'required',
            'Correo'=>'required',
            'Genero'=>'required'
        ]);
        $persona=Persona::create([
            'CI'=>$validatedata['CI'],
            'ApPaterno'=>$validatedata['ApPaterno'],
            'ApMaterno'=>$validatedata['ApMaterno'],
            'Nombre'=>$validatedata['Nombre'],
            'Correo'=>$validatedata['Correo'],
            'Genero'=>$validatedata['Genero']
        ]);
        return response()->json();
    }public function addpersona(Request $request){
        $validatedata=$request->validate([
            'CI'=>'required',
            'ApPaterno'=>'required',
            'ApMaterno'=>'required',
            'Nombre'=>'required',
            'Correo'=>'required',
            'Genero'=>'required',
            'FechaNac'=>'required',
            'Departamento'=>'required',
            'Provincia'=>'required',
            'Direccion'=>'required',
            'Idioma'=>'required',
            'TipoSangre'=>'required'
        ]);
        $persona=Persona::create([
            'CI'=>$validatedata['CI'],
            'ApPaterno'=>$validatedata['ApPaterno'],
            'ApMaterno'=>$validatedata['ApMaterno'],
            'Nombre'=>$validatedata['Nombre'],
            'Correo'=>$validatedata['Correo'],
            'Genero'=>$validatedata['Genero'],
            'FechaNac'=>$validatedata['FechaNac'],
            'Departamento'=>$validatedata['Departamento'],
            'Provincia'=>$validatedata['Provincia'],
            'Direccion'=>$validatedata['Direccion'],
            'Idioma'=>$validatedata['Idioma'],
            'TipoSangre'=>$validatedata['TipoSangre'],
        ]);
        return response()->json();
    }   
    public function eliminaPersonaPost($ci){
        $this->Persona::where('CI',$ci)->delete();
        return response()->json();
    }
}
