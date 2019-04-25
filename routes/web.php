<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/
Route::view('/habilitarervascuarx/{idcuartel}', 'welcome');
Route::view('/reserva', 'reserva');
Route::view('/cuarteles', 'cuarteles');
Route::view('/instru/index/{idcuartel}/{idcompania}','indexinstru');
Route::view('/instru/soldadossincomp/{idcuartel}/{idcompania}', 'soldadosincompa');
Route::view('/instru/listasis/{idcuartel}/{idcompania}', 'listasistencia');
Route::view('/instru/formlibreta/{ci}/{cinstru}', 'formlibreta');
Route::view('/libreta/{ci}/', 'libreta');
Route::view('/companias/{id}', 'companias');
Route::view('/admi/addcuartel', 'formcuartel');
Route::view('/admi/addcompaincuartel/{idcuartel}', 'formcompania');
Route::view('/admi/addinstru', 'formInstruAdmi');
Route::view('/cupos/{IdCuartel}', 'cupos');
//Route::get('/mail/qr/', 'ReservasController@enviarcorreo');
//Route::get('/qr/data/','ReservasController@generateQR');
Route::view('/singin','signin');


Auth::routes();



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
