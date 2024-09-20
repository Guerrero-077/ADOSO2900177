<?php
    include ("libreria/operaciones.php");
    $operaciones = new Operaciones();
    $controOperaciones = new ControlOperaciones();

    $operaciones -> setNumeroUno(2);
    $operaciones -> setNumeroDos(2);


?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        echo "suma: ". $controOperaciones ->sumar($operaciones ->getNumeroUno(),$operaciones ->getNumeroDos())."<br>";
        
        echo "Resta: ". $controOperaciones ->restar($operaciones ->getNumeroUno(),$operaciones ->getNumeroDos())."<br>";
        
        echo "Multiplicar: ". $controOperaciones ->multiplicacion($operaciones ->getNumeroUno(),$operaciones ->getNumeroDos())."<br>";
        
        echo "Dividir: ". $controOperaciones ->division($operaciones ->getNumeroUno(),$operaciones ->getNumeroDos());
    ?>
</body>
</html>