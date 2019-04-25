<?php

namespace App\Http\Controllers;

use App\Http\Controllers\PersonaController;
use App\Http\Controllers\CuartelController;
use App\Http\Controllers\PostulanteController;
use App\Http\Controllers\CuposAnioController;
use App\Http\Controllers\SoldadoController;
use App\Http\Controllers\CuarxHoraController;
use Carbon\Carbon;
use Illuminate\Http\Request;
use LaravelQRCode\Facades\QRCode;
use Illuminate\Support\Facades\Mail;
use Illuminate\Mail\Message;
use Illuminate\Mail\Mailable;
use Exception;

class ReservasController extends Controller
{
    public $ciglo=0;
    public function registrar(Request $request){
        try{
            $Departamento=$request->get('Departamento');
            $NombreCuartel=$request->get('NombreCuartel');
            $Genero=$request->get('Genero');
            $Correo=$request->get('Correo');
            $cuartel=new CuartelController;
            $cupos=new CuposAnioController;
            $postulante=new PostulanteController;
            /*if($postulante->noexistereserva($request->get('CI'))==false){
                echo "<script type='text/javascript'>alert('ya existe una reserva con este CI');window.location='http://localhost:8000'; </script>";
                exit();
            }*/
            $persona=new PersonaController;
            $cuarxhora=new CuarxHoraController;
            $IDcuartel=$cuartel->Cuartelesxdepnom($Departamento,$NombreCuartel);
            if($IDcuartel=='[]'){
                header('location:http://localhost:8000/reserva');
            exit();
            }else{
                $IDcuartel=json_decode($IDcuartel,true)[0]['IdCuartel'];
            }
                
            
            
            $libre=$cuarxhora->getnoLleno($IDcuartel);
            $IdHorario=$libre->IdHorario;
            $IdDia=$libre->IdDia;
            if($Genero==0){
                if($postulante->totPostulantesencuartelxdegeneroy($IDcuartel,$Genero)<$cupos->cuposMujeres($IDcuartel,Carbon::now()->year)){
                    $persona->addPersonaPost($request);
                    $request1=new Request;
                    $request1->replace(['CI'=>$request->get('CI'),'IdCuartel'=>$IDcuartel,'IdDia'=>$IdDia,'IdHorario'=>$IdHorario]);
                    $postulante->addDataPostulante($request1);
                    $this->enviarcorreo($request->get('CI'),$Correo);
                    if($this->nropostxhora($IDcuartel)==$postulante->totenhorarioycuartelx($IDcuartel,$IdDia,$IdHorario)){
                        $cuarxhora->setlleno($IDcuartel,$IdDia,$IdHorario);
                    }echo "<script type='text/javascript'>alert('Reserva realizada con exito') ;    </script>";
                    //header('location:http://localhost:8000');
                }else{
                    
                    echo "<script type='text/javascript'>alert('se acaban de llenar los cupos para este cuartel, porfavor seleccione otro');window.location='http://localhost:8000/reserva'; </script>";
                    //header('location:http://localhost:8000');
                    
                }    
            }
            
            else{
                if($postulante->totPostulantesencuartelxdegeneroy($IDcuartel,$Genero)<$cupos->cuposHombres($IDcuartel,Carbon::now()->year)){
                    $persona->addPersonaPost($request);
                    $request1=new Request;
                    $request1->replace(['CI'=>$request->get('CI'),'IdCuartel'=>$IDcuartel,'IdDia'=>$IdDia,'IdHorario'=>$IdHorario]);
                    $postulante->addDataPostulante($request1);
                    $this->enviarcorreo($request->get('CI'),$Correo);
                    if($this->nropostxhora($IDcuartel)==$postulante->totenhorarioycuartelx($IDcuartel,$IdDia,$IdHorario)){
                        $cuarxhora->setlleno($IDcuartel,$IdDia,$IdHorario);
                    }echo "<script type='text/javascript'>alert('Reserva realizada con exito');window.location='http://localhost:8000/reserva'; </script>";
                    
                }else{
                    echo "<script type='text/javascript'>alert('se acaban de llenar los cupos para este cuartel, porfavor seleccione otro') ;window.location='http://localhost:8000/reserva';</script>";
                    //header('location:http://localhost:8000');
                }
            }
        }catch(Exception $e){
            header('location:http://localhost:8000/reserva');
            exit();
        }
    }
    public function listarcuartelxdepartamento($Departamento){
        //$Cuarteles=$this->CuartelController->Cuartelesxdep($Departamento);
        //return $Cuarteles->toJson();
        $cuarteles=new CuartelController();
        return $cuarteles->Cuartelesxdep($Departamento);
    }
    public function eliminareserva($CIPostulante){
        //$CIPostulante=$request->get('CI');
        $postulante=new PostulanteController;
        if($postulante->eliminaPostulante($CIPostulante)){
            $this->PersonaController->eliminaPersonaPost($CIPostulante);
            echo "Reserva eliminada exitosamente";
        }else{
            echo "No existe una reserva sobre el carnet N° ".$CIPostulante;
        }
    }
    public function habilitar(Request $request){
        $CIPostulante=$request->get('CI');
        $Habilitado=new PostulanteController;
        $Habilitado->habilitarPostulante($CIPostulante);
        $Soldado=new SoldadoController;
        
    }
    public function enviarcorreo($ci,$Correo){
        $pos=new PostulanteController;
        $data=$pos->getdataci($ci);
        $res=new ReservasController;
        echo "<script type='text/javascript'>console.log(".$ci.")</script>";
        $res->generateQR($ci);
        $this->ciglo=$ci;
        Mail::send('correo',$data,function(Message $message){
            $message->to('miclovt@gmail.com')
                    ->from('pericodelospalotes639@gmail.com')
                    ->subject('formaporcontrolador')
                    ->embed(public_path($this->ciglo.'.png'));
        });
        // return view('correo');
    }
    public function generateQR($ci){
        $pos=new PostulanteController;
       QRCode::text($pos->getdataci($ci)['Nombre']."\n".$pos->getdataci($ci)['App']."\n".$pos->getdataci($ci)['Apm']."\n".$pos->getdataci($ci)['Cu']."\n".$pos->getdataci($ci)['Fecha']."\n".$pos->getdataci($ci)['Hora'])
       ->setOutfile(public_path($ci.".png"))->png();
    }
    public function nropostxhora($IDcuartel){
        $cuposAnio=new CuposAnioController;
        $cuarxhoracurtelx= new CuarxHoraController;
        if(intval(($cuposAnio->cuposHombres($IDcuartel,Carbon::now()->year)+$cuposAnio->cuposMujeres($IDcuartel,Carbon::now()->year))/$cuarxhoracurtelx->tothorarios($IDcuartel))!=(($cuposAnio->cuposHombres($IDcuartel,Carbon::now()->year)+$cuposAnio->cuposMujeres($IDcuartel,Carbon::now()->year))/$cuarxhoracurtelx->tothorarios($IDcuartel))){
            return intval(($cuposAnio->cuposHombres($IDcuartel,Carbon::now()->year)+$cuposAnio->cuposMujeres($IDcuartel,Carbon::now()->year))/$cuarxhoracurtelx->tothorarios($IDcuartel))+1;
        }else{
            return ($cuposAnio->cuposHombres($IDcuartel,Carbon::now()->year)+$cuposAnio->cuposMujeres($IDcuartel,Carbon::now()->year))/$cuarxhoracurtelx->tothorarios($IDcuartel);
        }
        return ($cuposAnio->cuposHombres($IDcuartel,Carbon::now()->year)+$cuposAnio->cuposMujeres($IDcuartel,Carbon::now()->year))/$cuarxhoracurtelx->tothorarios($IDcuartel);
    }
    /*
    public function listarPostulanteCuartelX(Request $request){
        $Departamento=$request->get('Departamento');
        $NombreCuartel=$request->get('NombreCuartel');
        $IDcuartel=$this->CuartelController->Cuartelesxdepnom($Departamento,$NombreCuartel);
        return $this->PostulanteController->listaPostxCuartel($IDcuartel);
    
    
        ($cuposAnio->cuposHombres($IDcuartel,Carbon::now()->year)+$cuposAnio->cuposMujeres($IDcuartel,Carbon::now()->year))/$cuarxhoracurtelx->tothorarios($IDcuartel)
    }*/
}
