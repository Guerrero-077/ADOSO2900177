<?php
    include('numero.php');
    include('operaciones.php');

    // Recibir el contenido JSON del cuerpo de la solicitud
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // Verificar si los datos fueron recibidos correctamente
    if (isset($data['txtNumUno']) && isset($data['txtNumDos'])) {
        $numero1 = $data['txtNumUno'];
        $numero2 = $data['txtNumDos'];

        $num1 = new Numero($numero1);
        $num2 = new Numero($numero2);

        $operaciones = new ControlOperaciones($num1, $num2);

        $response = [];
        $response['suma'] = $operaciones->sumar();
        $response['resta'] = $operaciones->restar();
        $response['multiplicacion'] = $operaciones->multiplicacion();
        $response['division'] = $operaciones->division();

        // Enviar la respuesta en formato JSON
        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        // Manejar el error si los números no están presentes
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Datos no válidos']);
    }
?>
