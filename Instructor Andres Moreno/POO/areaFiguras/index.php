<?php

include ('libreria/areafiguras.php');

    $figuras = new AreaFiguras();


    echo 'Area del cuadrado '.$figuras -> areaCuadrado(5).'<br>';

    echo 'Area del circulo '.$figuras -> areaCirculo(5).'<br>';
    
    echo 'Area del triangulo '.$figuras -> areaTriangulo(5,4);
?>