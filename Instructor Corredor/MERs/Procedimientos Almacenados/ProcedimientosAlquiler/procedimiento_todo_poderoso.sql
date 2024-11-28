DELIMITER $$
    CREATE PROCEDURE procedimiento_todo_poderoso()
            BEGIN
                CALL general_persona(6, 'Ruben Felipe', 'Tovar', '12345060789', 'felipe@gmail.com'); 
                CALL general_tipo_vehiculo(5, 'Camioneta', 3000000.00); 
                CALL general_vehiculo(6, 3, 'Ninja', 'Kawasaki', true); 
                CALL general_concesionario(6, 'Distoyotas', 'Carrera 5 N. 10'); 
                CALL general_metodo_pago(5, 'Cheques'); 
                CALL general_reserva(6, 5, 2, 5); 
                CALL general_factura(5, 5 , 4, 1750000.00); 
                CALL general_lista_vehiculo(6, 5, 3); 
                CALL general_historial_uso(6, 5, 3, '2024-09-15');
                CALL general_visitas(6, 5, 3, '2024-09-15');
                SELECT 'Transacción de todo poderoso completada con éxito' AS resultado;
                select * from persona;
                select * from tipo_vehiculo;
                select * from vehiculo;
                select * from concesionario;
                select * from metodoPago;
                select * from reserva;
                select * from factura;
                select * from listaVehiculo;
                select * from historialuso;
                select * from visita;
            END $$
DELIMITER ;