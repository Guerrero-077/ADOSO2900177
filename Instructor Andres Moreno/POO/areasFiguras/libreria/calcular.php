<?php

include('datos.php');
include('areas.php');

// Obtenemos los datos enviados por el usuario
$data = json_decode(file_get_contents('php://input'), true);

$figura = $data['figura'];
$response = [];

if ($figura === 'cuadrado') {
    $lado = new Datos($data['lado']);
    $area = new AreaFiguras($lado, null, null);
    $response['resultado'] = $area->areaCuadrado();
} elseif ($figura === 'rectangulo' || $figura === 'triangulo') {
    $base = new Datos($data['base']);
    $altura = new Datos($data['altura']);
    $area = new AreaFiguras(null, $base, $altura);

    $figura === 'rectangulo' ? $response['resultado'] = $area->areaRectangulo() : $response['resultado'] = $area->areaTriangulo();

    // if ($figura === 'rectangulo') {
    //     $response['resultado'] = $area->areaRectangulo();
    // } else {
    //     $response['resultado'] = $area->areaTriangulo();
    // }
}

// Enviar la respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($response);
