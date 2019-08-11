<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\CuartelController;
use App\Http\Controllers\CompaniaController;
use App\Http\Controllers\InstructorController;
use Exception;
class AdminController extends Controller
{
    public function adicionarCuartel(Request $request){
        $cuartel=new CuartelController;
        $Departamento=$request->get('Departamento');
        $nomcuartel=$request->get('NombreCuartel');
        if($cuartel->Cuartelesxdepnom($Departamento,$nomcuartel)=='[]'){
            $cuartel->addCuartel($request);
            echo "<script type='text/javascript'>alert('cuartel agregado exitosamente') ;window.location='http://localhost:8000/admi/addcuartel';</script>";
        }else{
            echo "<script type='text/javascript'>alert('ya existe el cuartel') ;window.location='http://localhost:8000/admi/addcuartel';</script>";
        }
    }public function adicionarInstructor(Request $request){
        try{
            $cuartel=new CuartelController;
            $instru=new InstructorController;
            $compania=new CompaniaController;
            if($request->get('Admin')=='1'){
                $instru->addInstructorxadmin($request);
                echo "<script type='text/javascript'>alert('administrador ingresado exitosamente');</script>";
            }else{
                $Departamento=$request->get('Departamento');
                $nomcuartel=$request->get('NombreCuartel');
                $IdCuartel=$cuartel->Cuartelesxdepnom($Departamento,$nomcuartel);
                $IdCuartel=json_decode($IdCuartel,true)[0]['IdCuartel'];
                if($compania->getCompaniaSinInstru($IdCuartel)!=null){
                    $IdCompania=$compania->getCompaniaSinInstru($IdCuartel)['IdCompania'];
                    $params=['CI'=>$request->get('CI'),'CodInstructor'=>$request->get('CodInstructor'),'Admin'=>0,'IdCuartel'=>$IdCuartel,'IdCompania'=>$IdCompania,'Admin'=>$request->get('Admin')];
                    $request1=new Request;
                    $request1->replace($params);
                    $instru->addInstructorxadmin($request1);
                    $compania->setTieneI($IdCompania);
                }else{
                    echo "<script type='text/javascript'>alert('no hay mas cupos para instructores') ;</script>";
                }
            }echo "<script>window.location='http://localhost:8000/admi/addinstru';</script>";
        }catch(Exception $e){
            echo "<script>window.location='http://localhost:8000/admi/addinstru';</script>";
        }
        
    }public function listarcuartelxdepartamento($Departamento){
        $cuarteles=new CuartelController();
        return $cuarteles->Cuartelesxdep($Departamento);
    }public function addCompaniatoCuartel(Request $request){
        $compania=new CompaniaController();
        $compania->addCompania($request);
    }
}
