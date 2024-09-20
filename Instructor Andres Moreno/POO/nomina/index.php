<?php
include('libreria/nomina.php');

$datos = new Datos();
$nomina = new Nomina();

if (!empty($_POST['diaT']) && !empty($_POST['valorD'])){
        $diaT = $_POST['diaT'];
        $valorD = $_POST['valorD'];

        
    $datos->setDiasT($diaT);
    $datos->setValorD($valorD);
    
    }else{
        $diaT = 0;
        $valorD = 0;
    
    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="../public/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../public/css/style.css">

</head>
<body>
<div class="container mt-5 mb-5">
    <div class="row forma">
        <div class="formulario col-6">
            <form class="row g-3 needs-validation justify-content-center" action="" method="post">
                <div class="col-md-8 user-box">
                    <label for="diaT" class="form-label">Días Trabajados: </label>
                    <input type="number" step="any" class="form-control" id="diaT" name="diaT" >
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-8 user-box">
                    <label for="valorD" class="form-label">Valor día: </label>
                    <input type="number" step="any" class="form-control" id="valorD" name="valorD" >
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div class="col-12 text-center">
                    <button class="btn btn-primary" type="submit"> Enviar</button>
                </div>
            </form>
        </div>

        <div class="col-4 respuesta">
            <div id="pantalla">

                    <p>El pago de la persona es: <?= $nomina->pagoPersona($datos->getDiasT(), $datos->getValorD()) ?></p>
                    <p>La salud es de: <?= $nomina->saludP() ?></p>
                    <p>La pensión es de: <?= $nomina->pensionP() ?></p>
                    <p>La ARL es de: <?= $nomina->arlP() ?></p>
                    <p>El subsidio de transporte es de: <?= $nomina->subTransporteP() ?></p>
                    <p>La retención es de: <?= $nomina->retenP() ?></p>
                    <p>El pago total será de: <?= $nomina->pagoTotalP() ?></p>
          
            </div>
        </div>
    </div>
</div>
</body>
</html>
