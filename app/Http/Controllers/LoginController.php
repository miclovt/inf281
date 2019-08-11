<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use App\Instructor;

class LoginController extends Controller
{
    public function username()
        {
            return 'CI';
        }
    public function login(Request $request){
        
        if($instru=Instructor::where('CI',$request->get('CI'))->where('ContraInstructor',$request->get('ContraInstructor'))->first()!=null){
            
            $instru=Instructor::where('CI',$request->get('CI'))->where('ContraInstructor',$request->get('ContraInstructor'))->first();
            
            if($instru['Admin']==1){
                
                echo "<script type='text/javascript'>window.location='http://localhost:8000/cuarteles'; </script>";
            }else{
                //echo 'location:http://localhost:8000/instru/index/'.$instru['IdCuartel'].'/'.$instru['IdCompania'];
               // header("location:http://localhost:8000/instru/index/".$instru['IdCuartel']."/".$instru['IdCompania']);
               echo "<script type='text/javascript'>window.location='http://localhost:8000/instru/index/".$instru['IdCuartel']."/".$instru['IdCompania']."'; </script>";
            }
        }
            
            
        
    }
}


