DELIMITER $$
    CREATE PROCEDURE procedimiento_todo_poderoso()
            BEGIN
                CALL general_persona(); 
                CALL general_tipo_vehiculo(); 
                CALL general_vehiculo(); 
                CALL general_concesionario(); 
                CALL general_metodo_pago(); 
                CALL general_reserva(); 
                CALL general_factura(); 
                CALL general_lista_vehiculo(); 
                CALL general_historial_uso();
                CALL general_visitas();
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