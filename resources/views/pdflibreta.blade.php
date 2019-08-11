<style>
@page{
    margin-top: 0cm;
    margin-bottom: 0cm;
    margin-left: 0.5cm;
    margin-right: 0.5cm;
}
table {
    border-collapse:separate;
    border:solid black 1px;
    border-radius:6px;
    -moz-border-radius:6px;
    width: 100%;
    
}

td, th {
    border-left:solid black 1px;
    border-top:solid black 1px;
    height: 20px;
}

th {
    background-color: blue;
    border-top: none;
}


.tit {
    font-weight: bold;
    font-size: 8px;
}
.con {
    text-indent: 25px;
    font-size: 8px;
}.con1{
    font-size: 8px;
}
.fondo{
    background-image: url("/images/escudo2.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 50px 50px;
    
}
.himno{
    line-height: 9px;
}
</style>
<div class="himno">
    <center><div class="fondo">
        <h4><br>HIMNO BOLIVIANO</h4>
        <table style="border: 0px;width: 170px" >
            <tr style="border: 0px">
                <td style="border: 0px" class="tit">
                    Letra
                </td>
                <td class="con1" style="border: 0px">
                        José Ignacio de Sanjinés 
                </td>
            </tr>
            <tr style="border: 0px">
                    <td class="tit" style="border: 0px">
                            Musica
                        </td>
                        <td class="con1" style="border: 0px">
                                Benedetto Vincentti Franti   
                        </td>
                </tr>
        </table>
        <h5>I</h5>
        <p class="con1">Bolivianos, el hado propicio<br>
                coronó nuestros votos y anhelo;<br>
                es ya libre, ya libre este suelo,<br>
                ya cesó su servil condición.<br></p>
        <p class="con1">
                Al estruendo marcial que ayer fuera,<br>
                y al clamor de la guerra horroroso,<br>
                siguen hoy en contraste armonioso,<br>
                dulces himnos de paz y de unión.<br></p>   
        <p class="con1">CORO:<br>
                De la patria, el alto nombre<br>
                en glorioso esplendor conservemos<br>
                y en sus aras de nuevo juremos<br>
                ¡Morir antes que esclavos vivir!<br></p>
        <h5>II</h5>
        <p class="con1">Loor eterno a los bravos guerreros,<br>
                cuyo heroico valor y firmeza<br>
                conquistaron las glorias que empieza<br>
                hoy Bolivia feliz a gozar.<br></p>
        <p class="con1">Que sus nombres el mármol y el bronce<br>
                a remotas edades transmitan<br>
                y en sonoros cantares repitan:<br>
                Libertad, libertad, libertad.<br></p>
        <p class="con1">CORO:<br>
                De la patria, el alto nombre<br>
                en glorioso esplendor conservemos<br>
                y en sus aras de nuevo juremos<br>
                ¡Morir antes que esclavos vivir!<br></p>
                <br><br><br><br><br><br><br>
                </div>

        <div class="fondo">
        <h5><br><br>III</h5>
        <p class="con1">Aquí alzó la justicia su trono,<br>
                que la vil opresión desconoce,<br>
                y en su timbre glorioso se goce<br>
                libertad, libertad, libertad.<br></p>
        <p class="con1">Esta tierra inocente y hermosa<br>
                que ha debido a Bolívar su nombre<br>
                es la patria feliz donde el hombre<br>
                goza el bien de la dicha y la paz.<br></p>
        <p class="con1">CORO:<br>
                De la patria, el alto nombre<br>
                en glorioso esplendor conservemos<br>
                y en sus aras de nuevo juremos<br>
                ¡Morir antes que esclavos vivir!<br></p>
        <h5>IV</h5>
        <p class="con1">Si extranjero poder algún día<br>
                sojuzgar a Bolivia intentare,<br>
                al destino fatal se prepare<br>
                que amenaza a soberbio invasor.<br></p>
        <p class="con1">Que los hijos del grande Bolívar<br>
                han ya mil y mil veces jurado<br>
                morir antes que ver humillado<br>
                de la patria el augusto pendón.<br></p>
        <p class="con1">CORO:<br>
                De la patria, el alto nombre<br>
                en glorioso esplendor conservemos<br>
                y en sus aras de nuevo juremos<br>
                ¡Morir antes que esclavos vivir!<br></p>
                <br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
    </center>
</div>
<div >
<center>
    <h4>DATOS PERSONALES</h4>
</center>
<table class="fondo">
    <tr>
    <td>
        <p class="tit">APELLIDO PATERNO</p>
        
        <p class="con">{{$ApPaterno}}</p>
    </td> 
    </tr>
    <tr>
            <td>
                    <p class="tit">APELLIDO MATERNO</p>
                    
                    <p class="con">{{$ApMaterno}}</p>
            </td>
    </tr>
    <tr>
            <td>
                    <p class="tit">NOMBRE(S)</p>
                    
                    <p class="con">{{$Nombre}}</p>
            </td>
        </tr>
        <tr>
                <td>
                        <p class="tit">LUGAR DE NACIMIENTO</p>
                        
                        <p class="con">{{$Departamento}}</p>
                </td>
        </tr>
        <tr>
                <td>
                        <p class="tit">FECHA DE NACIMIENTO</p>
                        
                        <p class="con">{{$FechaNac}}</p>
                </td>
        </tr>
        <tr>
                <td>
                        <p class="tit">PROVINCIA</p>
                        
                        <p class="con">{{$Provincia}}</p>
                </td>
            </tr>   
            <tr>
                    <td>
                            <p class="tit">DIRECCION</p>
                            
                            <p class="con">{{$Direccion}}</p>
                    </td>
            </tr>
            <tr>
                    <td>
                            <p class="tit">IDIOMA</p>
                            
                            <p class="con">{{$Idioma}}</p>
                    </td>
            </tr>
            <tr>
                    <td>
                            <p class="tit">NOMBRE DEL PADRE</p>
                            
                            <p class="con">{{$NomPadre}}</p>
                    </td>
            </tr>
            <tr>
                    <td>
                            <p class="tit">NOMBRE DE LA MADRE</p>
                            
                            <p class="con">{{$NomMadre}}</p>
                    </td>
            </tr>
</table>
</div>
<div class="fondo">
        <center>
                        
        <h4>RECLUTAMIENTO</h4>
        </center>
        <table >
                        <tr>
                                        <td>
                                            <p class="tit">FECHA DE PRESENTACION</p>
                                            
                                            <p class="con">{{$Fechapostu}}</p>
                                        </td> 
                                        </tr>
                                        <tr>
                                                <td>
                                                        <p class="tit">CENTRO DE RECLUTAMIENTO</p>
                                                        
                                                        <p class="con">{{$Regimiento}}</p>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        <p class="tit">RECONOCIMIENTO MEDICO</p>
                                                        
                                                        <p class="con">Habil</p>
                                                </td>
                                            </tr>
                                            
        </table>
        <center>
                <br>
        <h4>LICENCIAMIENTO</h4>
        </center>
        <table >
                        <tr>
                                        <td>
                                            <p class="tit">GRADO</p>
                                            
                                            <p class="con">{{$Grado}}</p>
                                        </td> 
                                        </tr>
                                        <tr>
                                                <td>
                                                        <p class="tit">REGIMIENTO</p>
                                                        
                                                        <p class="con">{{$Regimiento}}</p>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        <p class="tit">COMPANIA</p>
                                                        
                                                <p class="con">{{$Compania}}</p>
                                                </td>
                                            </tr>

                                            <tr>
                                                        <td>
                                                                <p class="tit">LLEVO INSTRUCCION DE</p>
                                                                
                                                        <p class="con">{{$Arma}}</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                                <td>
                                                                        <p class="tit">FECHA DE LICENCIAMIENTO</p>
                                                                        
                                                                <p class="con">{{$Fecha}}</p>
                                                                </td>
                                                            </tr>
        </table>

</div>
<div class="fondo">
        <center>
                <br><br><br>
        <img src="images/{{$Foto}}" width="225px" height="225px" style="margin: 0%" />
        <p style="margin-top: 0">N°: {{$NroMatricula}} </p>
        <p>Serie: {{$Serie}} </p>
        <p>CI: {{$CI}} </p>        
        </center>
        <table >
                        <tr>
                                        <td colspan="2"><center>
                                            <p class="tit">IMPRESION DIGITAL</p>
                                            </center>
                                        </td> 
                                        </tr>
                                        <tr>
                                                <td>
                                                        <p class="tit">Pulgar Izquierdo</p>
                                                </td>
                                                <td>
                                                                <p class="tit">Pulgar Derecho</p>
                                                        </td>
                                        </tr>
                                        <tr style="height: 100px">
                                                        <td >
                                                                       <br><br> <br><br> <br>
                                                                </td>
                                                                <td>
                                                                                <br><br> <br><br> <br>
                                                                        </td>
                                                    </tr>
                                            
        </table>
        
</div>
<div class="fondo" style="line-height: 8px;"><center>
   <h4>FILIACION PERSONAL</h4>

</center>
<table >
                <tr>
                                <td>
                                    <p class="tit">COLOR DE PIEL</p>
                                    
                                    <p class="con">{{$Piel}}</p>
                                </td> 
                                </tr>
                                <tr>
                                        <td>
                                                <p class="tit">NARIZ</p>
                                                
                                                <p class="con">{{$Nariz}}</p>
                                        </td>
                                </tr>
                                <tr>
                                        <td>
                                                <p class="tit">LABIOS</p>
                                                
                                        <p class="con">{{$Labios}}</p>
                                        </td>
                                    </tr>

                                    <tr>
                                                <td>
                                                        <p class="tit">OJOS</p>
                                                        
                                                <p class="con">{{$Ojos}}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                        <td>
                                                                <p class="tit">ALTURA</p>
                                                                
                                                        <p class="con">{{$Altura}} cm.</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                                <td>
                                                                        <p class="tit">PESO</p>
                                                                        
                                                                <p class="con">{{$Peso}} Kg.</p>
                                                                </td>
                                                            </tr><tr>
                                                <td>
                                                        <p class="tit">GRUPO SANGUINEO </p>
                                                        
                                                <p class="con">{{$TipoSangre}}</p>
                                                </td>
                                            </tr>

                                    
</table>
</div>