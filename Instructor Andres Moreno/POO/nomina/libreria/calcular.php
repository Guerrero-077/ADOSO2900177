<?php   
    include('datos.php');
    include('nomina.php');

    $data = json_decode(file_get_contents('php://input'), true);

    $valorD = $data['valorD'];
    $diasT = $data['diasT'];
    $salarioM = $data['salariM'];

    $valores = new Datos($valorD,$diasT,$salarioM);

    $nomina = new Nomina($valores);

    $response = [];
    $response['pago'] = $nomina -> pago();
    $response['salud'] = $nomina -> salud();
    $response['pension'] = $nomina -> pension();
    $response['arl'] = $nomina -> arl();
    $response['subTransporte'] = $nomina -> subTransporte();
    $response['reten'] = $nomina -> reten();
    $response['pagoTotal'] = $nomina -> pagoTotal();


    header('Content-Type: application/json');
    echo json_encode($response);