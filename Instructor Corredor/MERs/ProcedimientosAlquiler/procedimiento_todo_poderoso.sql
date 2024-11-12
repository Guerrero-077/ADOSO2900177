DELIMITER $$

    CREATE PROCEDURE procedimiento_todo_poderoso()
            BEGIN
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                
                    ROLLBACK;
                    SELECT 'Error: Ha ocurrido un problema con las transacciones de todo poderoso, ninguna operación se realizó.';
                END;

                START TRANSACTION;

                    CALL todo_poderoso_persona(); 
                    CALL todo_poderoso_tipo_vehiculo(); 
                    CALL todo_poderoso_vehiculo(); 
                    CALL todo_poderoso_concesionario(); 
                    CALL todo_poderoso_metodo_pago(); 
                    CALL todo_poderoso_reserva(); 
                    CALL todo_poderoso_factura(); 
                    CALL todo_poderoso_lista_vehiculo(); 
                    CALL todo_poderoso_historial_uso();

                    CALL todo_poderoso_persona_concesionario(); 

                COMMIT;

                SELECT 'Transacción de todo poderoso completada con éxito' AS resultado;

                    SELECT * FROM persona;
                    SELECT * FROM tipo_vehiculo;
                    SELECT * FROM vehiculo;
                    SELECT * FROM concesionario;
                    SELECT * FROM metodoPago;
                    SELECT * FROM reserva;
                    SELECT * FROM factura;
                    SELECT * FROM listaVehiculo;
                    SELECT * FROM historialUso;
                    SELECT * FROM persona_concesionario;
            END $$
DELIMITER ;
