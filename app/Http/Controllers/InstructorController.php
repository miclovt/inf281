<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Instructor;
use Exception;
use Illuminate\Support\Facades\DB;

class InstructorController extends Controller
{
    public function index(){
        $Instructores=Instructor::all();
        return $Instructores->toJson();
    }
    public function addInstructor(Request $request){
        $validatedata=$request->validate([
            'CI'=>'required',
            'ContraInstructor'=>'required',
            'CodInstructor'=>'required',
            'Grado'=>'required',
            'Arma'=>'required',
        ]);
        try{
            $instructor=Instructor::where('CI',$validatedata['CI'])->where('CodInstructor',$validatedata['CodInstructor'])->update([
                'ContraInstructor'=>$validatedata['ContraInstructor'],
                'Grado'=>$validatedata['Grado'],
                'Arma'=>$validatedata['Arma'],
            ]);
        }catch(Exception $e){
            echo "<script type='text/javascript'>alert('codigo o CI incorrectos') ;window.location='http://localhost:8000/singin';</script>";
        }finally{
            return response()->json();
        }
        
        
    }public function getcodeIns($ci){
        return Instructor::select('CodInstructor')->where('CI',$ci)->first()->get();
    }public function existeci($ci){
        if(Instructor::where('CI',$ci)->count()!=0){
            return true;
        }return false;
    }
    public function addInstructorxadmin(Request $request){
        $admi=$request->get('Admin');
        if($admi==0){
            $validatedata=$request->validate([
                'CI'=>'required',
                'CodInstructor'=>'required',
                'IdCuartel'=>'required',
                'IdCompania'=>'required',
            ]);
            $instructor=Instructor::create([
                'CI'=>$validatedata['CI'],
                'CodInstructor'=>$validatedata['CodInstructor'],
                'IdCuartel'=>$validatedata['IdCuartel'],
                'IdCompania'=>$validatedata['IdCompania'],
                'Admin'=>0
            ]);
        }else{
            $validatedata=$request->validate([
                'CI'=>'required',
                'CodInstructor'=>'required',
            ]);
            $instructor=Instructor::create([
                'CI'=>$validatedata['CI'],
                'CodInstructor'=>$validatedata['CodInstructor'],
                'IdCuartel'=>1,
                'IdCompania'=>1,
                'Admin'=>1
            ]);
        }
        return response()->json();
    }  
    public function eliminaInstructor($ci){
        $this->Instructor::where('CI',$ci)->delete();
        return response()->json();
    }public function getcinstru($idcompania){
        return json_encode(Instructor::select('CI')->where('IdCompania',$idcompania)->first());
    }
    public function getcuarcomp($ci){
        $data=Instructor::select('IdCompania','IdCuartel')->where('CI',$ci)->first();
        return $data['Idcuartel']+'/'+$data['IdCompania'];
    }
}
