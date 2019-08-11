<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\SoldadoController;
use App\Http\Controllers\InstructorController;
class InscribirController extends Controller
{
    public function addSoldadofull(Request $request){
        $requestsoldado=new Request;
        $requestpersona=new Request;
        $paramsol=[
            'CI'=>$request->get('CI'),
            'ContraSoldado'=>$request->get('ContraSoldado'),
            'NomPadre'=>$request->get('NomPadre'),
            'NomMadre'=>$request->get('NomMadre'),
        ];
        $paramper=[
            'CI'=>$request->get('CI'),
            'Departamento'=>$request->get('Departamento'),
            'Provincia'=>$request->get('Provincia'),
            'Direccion'=>$request->get('Direccion'),
            'Idioma'=>$request->get('Idioma'),
            'FechaNac'=>$request->get('FechaNac'),
            'TipoSangre'=>$request->get('TipoSangre'),
        ];
        $requestsoldado->replace($paramsol);
        $requestpersona->replace($paramper);
        $per=new PersonaController;
        $sol=new SoldadoController;
        $per->addPersonaHabilitada($requestpersona);
        $sol->addSoldadoRegistro($requestsoldado);
        echo "<script>window.location='http://localhost:8000/';</script>";
    }public function addInstrufull(Request $request){
        $requestsoldado=new Request;
        $requestpersona=new Request;
        $paramsol=[
            'CI'=>$request->get('CI'),
            'ContraInstructor'=>$request->get('ContraInstructor'),
            'CodInstructor'=>$request->get('CodInstructor'),
            'Grado'=>$request->get('Grado'),
            'Arma'=>$request->get('Arma'),
        ];
        $paramper=[
            'CI'=>$request->get('CI'),
            'ApPaterno'=>$request->get('ApPaterno'),
            'ApMaterno'=>$request->get('ApMaterno'),
            'Nombre'=>$request->get('Nombre'),
            'Correo'=>$request->get('Correo'),
            'Genero'=>$request->get('Genero'),
            'Departamento'=>$request->get('Departamento'),
            'Provincia'=>$request->get('Provincia'),
            'Direccion'=>$request->get('Direccion'),
            'Idioma'=>$request->get('Idioma'),
            'FechaNac'=>$request->get('FechaNac'),
            'TipoSangre'=>$request->get('TipoSangre'),
        ];
        $requestsoldado->replace($paramsol);
        $requestpersona->replace($paramper);
        $per=new PersonaController;
        $sol=new InstructorController;
        $per->addpersona($requestpersona);
        $sol->addInstructor($requestsoldado);
        echo "<script>window.location='http://localhost:8000/';</script>";
    }

}
