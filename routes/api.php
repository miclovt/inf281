<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('reserva', 'ReservasController@registrar');
Route::post('fechas', 'DiaController@actuDia');
Route::post('nuevocuartel', 'AdminController@adicionarCuartel');
Route::post('nuevoinstru', 'AdminController@adicionarInstructor');
Route::post('nuevacompania', 'AdminController@addCompaniatoCuartel');
Route::post('addinstru', 'InstructorController@addInstructor' );
Route::post('addlibreta', 'LibretaController@addlibreta');
Route::post('addfullsoldado','InscribirController@addSoldadofull');
Route::post('addfullinstru','InscribirController@addInstrufull');
Route::post('loginsoldado','SoldadoController@login');
Route::get('allpostu/{idcuartel}','PostulanteController@allpostudelcuartelx');
Route::get('allcuarteles', 'CuartelController@index');
Route::get('datasoldado/{ci}', 'LibretaController@getdataparaformlibreta');
Route::get('allcompanias/{id}', 'CompaniaController@getcompaniasxcuartel');
Route::get('reserva/{nomdep}', 'ReservasController@listarcuartelxdepartamento');
Route::get('admiaddInstru/{nomdep}', 'AdminController@listarcuartelxdepartamento');
Route::get('nomcuartel/{id}', 'CuartelController@getnombre');
Route::get('soldadosdelcuartel/{idcuartel}', 'SoldadoController@getallsincompa');
Route::get('listarasistencia/{idcuartel}/{idcompania}', 'SoldadoController@getdatawithasis');
Route::get('getcinstru/{idcompania}', 'InstructorController@getcinstru');
Route::put('habilitar/{ci}','PostulanteController@habilitarPostulante');
Route::put('aniadiracompania', 'SoldadoController@updatecompania');
Route::put('marcarasistencia', 'AsistenciaController@updateasis');
Route::put('addtarea', 'SoldadoController@updatetarea');
Route::put('addgrado', 'SoldadoController@updategrado');
Route::get('login', 'LoginController@login');
Route::post('activo', 'SoldadoController@getalldataoftoday');
Route::post('reservista', 'SoldadoController@getalldata');
Route::get('cupos/{IdCuartel}', 'CuposAnioController@getactualdata');
Route::get('url/{CiInstructor}', 'InstructorController@getcuarcomp');
Route::post('actucupos', 'CuposAnioController@actualizaroañadir');
Route::put('updatenom', 'CompaniaController@updatenom');
